import React, { useState, useMemo } from 'react';

function CounterMemo(props) {
  const [counter1, setCounter1]= useState(0)
  const [counter2, setCounter2]= useState(0)

  const incrementOne = () => {
    setCounter1(counter1+1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while(i<2000000000) i++
    return counter1 % 2 === 0    
  }, [counter1])

  const incrementTwo = () => {
    setCounter2(counter2+1)
  }

  
  return (
    <div>
      <div className='mb-1'>
      <button onClick={incrementOne} className="btn btn-info mr-1">Count1 - {counter1}</button>
      <span>{isEven? 'Even' : 'Odd'} </span> 
      </div>
      <button onClick={incrementTwo} className="btn btn-info">Count2 - {counter2}</button>
    </div>
  );
}

export default CounterMemo;