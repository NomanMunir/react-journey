import { useParams } from "react-router";

export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Details for id: {params.id}</h1>
      <p></p>
    </>
  );
}
