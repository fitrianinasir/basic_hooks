import React from 'react';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';
import HookCounter2 from './HookCounter2';
import HookCounter3 from './HookCounter3';
import HookCounter4 from './HookCounter4';
import HookEffect from './HookEffect';
import ClassCounterMouse from './ClassCounterMouse';
import HookEffectMouse from './HookEffectMouse';
import MouseContainer from './MouseContainer';
import ClassIntervalCounter from './ClassIntervalCounter';
import HookIntervalCounter from './HookIntervalCounter';
import HookAPI from './HookAPI';
import HookAPI2 from './HookAPI2';

function Basic(props) {
  return (
    <div>
       <div className="mt-5">
        <h3>Class Component</h3>
        <ClassCounter/>
      </div>
      <hr />
      <div className="mt-5">
        <h3>Functional and useState</h3>
        <HookCounter/>
      </div>
      <hr />
      <div className="mt-5">
        <HookCounter2/>
      </div>
      <hr />
      <div className="mt-5">
        <h3>useState with Object</h3>
        <HookCounter3/>
      </div>
      <hr />
      <div className="mt-5">
        <HookCounter4/>
      </div>
      <hr />
      <div className="mt-5">
        <HookEffect/>
      </div>
      <div className="mt-5">
        <ClassCounterMouse/>
      </div>
      <div className="mt-5">
        <HookEffectMouse/>
      </div>
      <hr />
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
        <hr />
      </div>
      <div className="mt-5">
        <HookAPI2/>
      </div>
    </div>
  );
}

export default Basic;