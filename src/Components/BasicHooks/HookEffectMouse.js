import React, { useState, useEffect } from "react";

function HookEffectMouse(props) {
  const [x, setX] =  useState(0)
  const [y, setY] = useState(0)


  useEffect(()=>{
    window.addEventListener('mousemove', mouseTrigger)

    return()=>{
      window.removeEventListener('mousemove', mouseTrigger )
    }
  },[])

  const mouseTrigger = (e) =>{
    setX(e.clientX)
    setY(e.clientY)
  }
  return (
    <div>
      <h3>useEffect Mouse</h3>
      <p>X - {x}</p>
      <p>Y - {y}</p>
    </div>
  );
}

export default HookEffectMouse;
