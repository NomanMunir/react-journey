import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/products">Go to products.</Link>
      </p>
    </div>
  );
}
