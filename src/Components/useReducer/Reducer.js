import React from 'react';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import CounterThree from './CounterThree';

function Reducer(props) {
  return (
    <div>
      <div className="mt-5">
        <CounterOne/>
      </div>
      <div className="mt-5">
        <CounterTwo/>
      </div> <hr/>
      <div className="mt-5">
        <CounterThree/>
      </div>
    </div>
  );
}

export default Reducer;