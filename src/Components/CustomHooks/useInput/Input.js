import React from 'react';
import UserForm from './UserForm';
import UserForm2 from './UserForm2';

function Input(props) {
  return (
    <div>
      <UserForm/>
      <hr/>
      <UserForm2/>
    </div>
  );
}

export default Input;