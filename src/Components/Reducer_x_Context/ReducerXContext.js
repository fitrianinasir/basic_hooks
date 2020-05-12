import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerXContext(props) {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>REDUCER x CONTEXT</h3>
      <h4>COUNT : {count}</h4>
      <hr />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <hr />
        <ComponentB />
        <hr />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default ReducerXContext;
