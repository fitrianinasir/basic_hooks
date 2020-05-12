import React, { useState, useEffect } from "react";

function HookEffect(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  useEffect(()=>{
    document.title = `Clicked ${count} times` 
  },[count])

  const changeHandler = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
      <h2>useEffect</h2>
      <input type="text" value={name} onChange={changeHandler}/>
      <button className="btn btn-primary" onClick={()=> setCount(count+1)}>Click {count} times</button>
    </div>
  );
}

export default HookEffect;