import React, { useState } from "react";

function HookCounter4(props) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const addItem2 = async () => {
    setCount(count + 1);
    setItems2([...items2, count]);
  };
  return (
    <div>
      <button className="btn btn-primary mr-3" onClick={addItem}>
        Add a random number
      </button>
      {items.map((item) => (
        <p key={item.id} className="mr-1" style={{ display: "inline-block" }}>
          {item.value},
        </p>
      ))}
      <br /> <br />
      <button className="btn btn-primary mr-3" onClick={addItem2}>
        Add an increment number
      </button>
      {items2.map((item) => (
        <p className="mr-1" style={{ display: "inline-block" }}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default HookCounter4;
