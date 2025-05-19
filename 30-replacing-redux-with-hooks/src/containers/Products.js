import ProductItem from "../components/Products/ProductItem.js";
import { useStore } from "../hooks-store/store.js";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
