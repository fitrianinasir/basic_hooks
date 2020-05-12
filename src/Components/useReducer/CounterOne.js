import React, {useReducer} from 'react';


const initialState = 5
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
function CounterOne(props) {
  const [count, dispatch] = useReducer(reducer, initialState)
  console.log('count : ', count)
  return (
    <div>
      <h2>COUNTER 1</h2>
      <button className="btn btn-primary mr-1" onClick={() => dispatch('increment')}>Increment</button>
      <button className="btn btn-primary mr-1" onClick={() => dispatch('decrement')}>Decrement</button>
      <button className="btn btn-warning" onClick={() => dispatch('reset')}>Reset</button>
      
    </div>
  );
}

export default CounterOne;