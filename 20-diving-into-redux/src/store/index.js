import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "incrementByFive") {
    return {
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "reset")
    return {
      counter: 0,
    };

  return state;
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
