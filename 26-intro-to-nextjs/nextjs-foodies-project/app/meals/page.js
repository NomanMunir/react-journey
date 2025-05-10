import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h2>Meals Page</h2>
      <p>
        <Link href="/meals/m1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/m2">Meal 2</Link>
      </p>
    </main>
  );
}
