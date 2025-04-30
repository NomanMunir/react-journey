import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "./store/CartContext.jsx";
import Button from "./UI/Button";

export default function Header() {
  // const cartCtx = useContext(CartContext);
  // const totalCartItems = cartCtx.items.reduce(
  //   (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
  //   0
  // );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo Image" />
        <h1>MyFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
