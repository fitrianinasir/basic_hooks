import React, { useState } from "react";
import HookEffectMouse from "./HookEffectMouse";

function MouseContainer(props) {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h3>Practice Unmount in ReactHooks</h3>
      <button className="btn btn-primary" onClick={()=>setDisplay(!display)}>Toggle display</button>

      <br/>
      <br/>
      {display && <HookEffectMouse/>}
    </div>
  );
}

export default MouseContainer;
