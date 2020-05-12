import React, { useState, useEffect, useRef } from "react";

function UserForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };

  return (
    <div>
      <h4>User Form 1</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="" className="mr-3">
            First Name :
          </label>
          <input
            value={firstName}
            ref={inputRef}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="" className="mr-3">
            Last Name :
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
}

export default UserForm;
