import React from "react";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import HookCounter2 from "./Components/HookCounter2";
import HookCounter3 from "./Components/HookCounter3";
import HookCounter4 from "./Components/HookCounter4";
import "./App.css";
import HookEffect from "./Components/HookEffect";
import ClassCounterMouse from "./Components/ClassCounterMouse";
import HookEffectMouse from "./Components/HookEffectMouse";
import MouseContainer from "./Components/MouseContainer";
import ClassIntervalCounter from "./Components/ClassIntervalCounter";
import HookIntervalCounter from "./Components/HookIntervalCounter";
import HookAPI from "./Components/HookAPI";

const App = () => {
  return (
    <div className="App">
      <div className="mt-5">
        <h3>Class Component</h3>
        <ClassCounter />
      </div>
      <hr/>
      <div className="mt-5">
        <h3>Functional and useState</h3>
        <HookCounter />
      </div>
      <hr/>
      <div className="mt-5">
        <HookCounter2/>
      </div>
      <hr/>
      <div className="mt-5">
        <h3>useState with Object</h3>
        <HookCounter3/>
      </div>
      <hr/>
      <div className="mt-5">
        <HookCounter4/>
      </div>
      <hr/>
      <div className="mt-5">
        <HookEffect/>
      </div>
      <div className="mt-5">
        <ClassCounterMouse/>
      </div>
      <div className="mt-5">
        <HookEffectMouse/>
      </div>
      <hr/>
      <div className="mt-5">
        <MouseContainer/>
      </div>
      <div className="mt-5">
        <ClassIntervalCounter/>
      </div>
      <div className="mt-">
        <HookIntervalCounter/>
      </div>
      <div className="mt-5">
        <HookAPI/>
      </div>
    </div>
  );
};

export default App;
