import React from "react";
import useInput from "./useInput";

function UserForm2(props) {  
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  };
  
  return (
    <div>
      <h4>User Form 2</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="" className="mr-3">
            First Name ::::
          </label>
          <input
            {...bindFirstName}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="" className="mr-3">
            Last Name :
          </label>
          <input
           {...bindLastName}
            type="text"
          />
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
}

export default UserForm2;
