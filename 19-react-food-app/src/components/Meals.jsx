import MealItem from "./MealItem.jsx";
import Error from "./UI/Error.jsx";
import useHttp from "./hooks/useHttp.js";

const requstConfig = {};
export default function Meals() {
  const {
    data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requstConfig, []);

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {isLoading && <p className="center">Loading meals...</p>}
      {mealsData.length > 0 &&
        mealsData.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
