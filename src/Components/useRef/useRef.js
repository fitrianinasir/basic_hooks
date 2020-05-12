import React from 'react';
import FocusInput from './FocusInput';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';

function useRef(props) {
  return (
    <div>
      <ClassTimer/>
      <HookTimer/>
      <FocusInput/> 
    </div>
  );
}

export default useRef;