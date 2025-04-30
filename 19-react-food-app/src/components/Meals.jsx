import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const meals = await response.json();
        setMealsData(meals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {mealsData.length <= 0 && <p>Loading meals...</p>}
      {mealsData.length > 0 &&
        mealsData.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
