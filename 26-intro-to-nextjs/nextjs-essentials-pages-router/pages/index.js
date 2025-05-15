import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link href="/Home">Home</Link>
      </p>
      <p>
        <Link href="/news">news</Link>
      </p>
    </>
  );
}
