import React, {useReducer} from 'react';


const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment' :
      return state + 1
    case 'decrement' :
      return state - 1
    case 'reset' :
      return initialState
    default :
    return state
  }
}
function CounterThree(props) {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)
  console.log('count : ', count)
  return (
    <div>
      <h2>COUNTER 3</h2>
      <h3>Count - {count}</h3>
      <button className="btn btn-primary mr-1" onClick={() => dispatch('decrement')}>Decrement</button>
      <button className="btn btn-primary mr-1" onClick={() => dispatch('increment')}>Increment</button>
      <button className="btn btn-warning" onClick={() => dispatch('reset')}>Reset</button>
      <p>-----------------</p>
      <h3>Count - {count2}</h3>
      <button className="btn btn-primary mr-1" onClick={() => dispatch2('decrement')}>Decrement</button>
      <button className="btn btn-primary mr-1" onClick={() => dispatch2('increment')}>Increment</button>
      <button className="btn btn-warning" onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  );
}

export default CounterThree;