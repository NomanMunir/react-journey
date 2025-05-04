import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActoins } from "../Store/cart";

const CartItem = ({ item }) => {
  const { title, quantity, total, price, id } = item;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(
      cartActoins.addItem({
        id,
        price,
        title,
      })
    );
  };

  const handleRemoveItem = () => {
    dispatch(cartActoins.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
