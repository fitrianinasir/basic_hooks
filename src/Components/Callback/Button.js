import React from 'react';

function Button({handleClick, children}) {
  console.log('Rendering button - ', children)
  return (
    <div>
      <button className="btn btn-info" onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);