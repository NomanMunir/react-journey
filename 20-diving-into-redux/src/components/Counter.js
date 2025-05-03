import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const handledecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrementByFive = () => {
    dispatch(counterActions.incrementByFive(5));
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
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
      <button onClick={() => dispatch(counterActions.toggle())}>
        Toggle Counter
      </button>
      <button onClick={() => dispatch(counterActions.resetCounter())}>
        Reset
      </button>
    </main>
  );
};

export default Counter;
