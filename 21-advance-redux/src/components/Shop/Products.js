import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { cartActoins } from "../Store/cart";

const DUMMY_ITEMS = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    description: "this first book i wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My second Book",
    description: "this second book i wrote",
  },
];

const Products = (props) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = (product) => {
    dispatch(cartActoins.addItem(product));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              addItemToCart={() => addItemToCartHandler(item)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
