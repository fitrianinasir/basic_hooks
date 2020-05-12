import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {  ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {  ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {  ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterTwo(props) {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>COUNTER 2</h2>
      <h3>First Counter - {count.firstCounter}</h3>
      <h3>Second Counter - {count.secondCounter}</h3>
      <button
        className="btn btn-primary mr-1"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => dispatch({ type: "increment2", value: 5 })}
      >
        Increment 5
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => dispatch({ type: "decrement2", value: 5 })}
      >
        Decrement 5
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
