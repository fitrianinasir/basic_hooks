import React, { useState} from 'react';
import useDocumentTitle from './Hooks/useDocumentTitle';

function Doc2(props) {
  const [count, setCount] = useState(0);
  useDocumentTitle(count)
  return (
    <div>
      <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Count - {count}</button>
    </div>
  );
}

export default Doc2;