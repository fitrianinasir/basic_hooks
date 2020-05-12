import React, { useContext } from "react";
import { CountContext } from "./ReducerXContext";

function ComponentF(props) {
  const value = useContext(CountContext);
  return (
    <div>
      <h3>Component F</h3>
      <button
        className="btn btn-primary mr-1"
        onClick={() => value.countDispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => value.countDispatch("increment")}
      >
        Increment
      </button>
      <button
        className="btn btn-warning"
        onClick={() => value.countDispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
