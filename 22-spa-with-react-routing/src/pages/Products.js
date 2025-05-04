import { Link } from "react-router";

const PRODUCTS = [
  { id: "p1", title: "Product-1" },
  { id: "p2", title: "Product-2" },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li>
            <Link key={product.id} to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
