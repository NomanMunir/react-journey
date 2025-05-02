import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";
import CartContext from "./store/CartContext";

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  function handleRemoveCartItem() {
    cartCtx.removeItem(item.id);
  }

  function handleAddCartItem() {
    cartCtx.addItem(item);
  }

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleRemoveCartItem}>-</button>
        <span>QTY</span>
        <button onClick={handleAddCartItem}>+</button>
      </p>
    </li>
  );
}
