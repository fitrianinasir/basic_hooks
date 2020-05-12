import React, {useState, useEffect} from 'react';

function HookIntervalCounter(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return() => {
      clearInterval(interval)
    }
  }, [])

  const tick = () =>{
    setCount(prevCount => prevCount+1)
  }
  return (
    <div>
      <h3>Hook Interval Counter</h3>
      <h4>{count}</h4>
    </div>
  );
}

export default HookIntervalCounter;