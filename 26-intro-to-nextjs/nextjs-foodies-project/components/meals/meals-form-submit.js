"use client";

import { useActionState } from "react";

export default function MealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <button type="submit" disable={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
