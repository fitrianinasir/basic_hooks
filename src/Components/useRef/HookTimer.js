import React, { useState, useEffect, useRef } from 'react';

function HookTimer(props) {
  const [timer, setTimer] = useState(0)

  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer+1)
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div>
      <h3>HOOK TIMER - {timer}</h3>
      <button className="btn btn-warning mb-2" onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  );
}

export default HookTimer;