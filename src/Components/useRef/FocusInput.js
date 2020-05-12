import React, { useEffect, useRef } from 'react';

function FocusInput(props) {

  const inputRef = useRef(null)
  useEffect(() => {
    // focus input element after fist load
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  );
}

export default FocusInput;