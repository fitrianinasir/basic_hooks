import React, { useState } from "react";

function HookCounter3(props) {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <label htmlFor="" className="mr-1">First name : </label>
        <input
          type="text"
          className="form-group"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value})}
        /> <br/>
        <label htmlFor="" className="mr-1">Last name : </label>
        <input
          type="text"
          className="form-group ml-1"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value })}
        />
        <h3>Your first name is - {name.firstName}</h3>
        <h3>Your last name is - {name.lastName}</h3>
      </form>
    </div>
  );
}

export default HookCounter3;
