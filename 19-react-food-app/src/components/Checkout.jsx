import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "./store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import useHttp from "./hooks/useHttp.js";
import Error from "./UI/Error.jsx";
import { useActionState } from "react";

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    config
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + +item.price,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }
  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const formObject = Object.fromEntries(fd.entries());
    const orderData = {
      order: {
        customer: {
          name: formObject["full-name"],
          email: formObject.email,
          street: formObject.street,
          "postal-code": formObject["postal-code"],
          city: formObject.city,
        },
        items: cartCtx.items,
      },
    };

    if (
      !orderData.order.customer.name ||
      !orderData.order.customer.email ||
      !orderData.order.customer.street ||
      !orderData.order.customer["postal-code"] ||
      !orderData.order.customer.city ||
      !orderData.order.customer.email.includes("@") ||
      cartCtx.items.length === 0
    ) {
      alert(
        "Please fill in all fields correctly and ensure the cart is not empty."
      );
      return;
    }

    await sendRequest(JSON.stringify(orderData));
  }

  const [formSate, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );
  let actions = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        Close{" "}
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );
  if (isSending) actions = <span>Sending data...</span>;

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal-code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Error Sending Data." message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
