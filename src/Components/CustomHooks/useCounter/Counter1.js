import React, { useState } from 'react';

function Counter1(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount+1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount-1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className='mb-4'>
      <h3>Counter1 - {count}</h3>
      <button className="btn btn-info mr-1" onClick={increment}>Increment</button>
      <button className="btn btn-info mr-1" onClick={decrement}>Decrement</button>
      <button className="btn btn-info mr-1" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1; 