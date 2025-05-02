import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "./store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";

export default function Checkout({}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + +item.price,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  async function handleOrderSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
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

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit order.");
      }

      const result = await response.json();
      console.log(result);
      alert("Order submitted successfully!");
      userProgressCtx.hideCheckout();
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting your order. Please try again.");
    }
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleOrderSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal-code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close{" "}
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
