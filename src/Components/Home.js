import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {

  const style = {
    marginTop:'1rem',
  }

  return (
    <div style={style}>
      <center>
      <Link to='/basic'>
        <button className="btn btn-info mr-1">BASIC HOOKS</button>
      </Link>
      <Link to='/context'>
        <button className="btn btn-info mr-1">USECONTEXT</button>
      </Link>
      <Link to='/reducer'>
        <button className="btn btn-info mr-1">USEREDUCE</button>
      </Link>
      <Link to='/reducer-context'>
        <button className="btn btn-info mr-1">USEREDUCE</button>
      </Link>
      <Link to="/data-fetching">
        <button className="btn btn-info mr-1">DATA FETCHING WITH REDUCE</button>
      </Link>
      <Link to='/callback'>
        <button className="btn btn-info mr-1">CALLBACK</button>
      </Link>
      <Link to='/memo'>
        <button className="btn btn-info mr-1">MEMO</button>
      </Link>
      <Link to='/ref'>
        <button className="btn btn-info mr-1">USEREF</button>
      </Link>
      <Link to='/doc'>
        <button className="btn btn-info mr-1">USEDOCUMENT</button>
      </Link>
      <Link to='/usecounter'>
        <button className="btn btn-info mr-1">USECOUNTER</button>
      </Link>
      <Link to='/useinput'>
        <button className="btn btn-info mr-1">USEINPUT</button>
      </Link>
      </center>
      <br/><br/><hr/>
    </div>
  );
}
export default Home;