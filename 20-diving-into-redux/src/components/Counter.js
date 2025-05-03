import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handledecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrementByFive = () => {
    dispatch({ type: "incrementByFive", payload: 5 });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementByFive}>Increment by 5</button>
        <button onClick={handledecrement}>Decrement</button>
      </div>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Toggle Counter
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </main>
  );
};

export default Counter;
