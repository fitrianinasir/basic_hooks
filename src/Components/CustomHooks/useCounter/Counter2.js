import React from 'react';
import useCounter from './useCounter';

function Counter2(props) {
  const [count, increment, decrement, reset] = useCounter(10, 10)
  return (
    <div>
      <h3>Counter2 - {count}</h3>
      <button className="btn btn-info mr-1" onClick={increment}>Increment</button>
      <button className="btn btn-info mr-1" onClick={decrement}>Decrement</button>
      <button className="btn btn-info mr-1" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2; 