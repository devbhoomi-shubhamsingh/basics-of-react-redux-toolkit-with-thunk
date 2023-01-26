import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../features/slices/counter";

const CounterApp = () => {
  const dispatch = useDispatch();
  // Here we are getting all reducers data inside state object
  const { counter } = useSelector((state) => state.counter);

  const increment = () => dispatch(incrementCounter(100));
  const decrement = () => dispatch(decrementCounter(10));
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>Increment (+)</button> &nbsp;&nbsp;
      <button onClick={decrement}>Decrement (-)</button>
    </>
  );
};

export default CounterApp;
