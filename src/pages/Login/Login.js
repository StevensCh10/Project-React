import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(username, password) {
 return fetch(`http://localhost:8080/Login/checkLogin/${username}/${password}`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
}

export default function Login({ setObj }) {
  const [user_name, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const obj = await loginUser(
      user_name,
      password
    );
    setObj(obj);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setObj: PropTypes.func.isRequired
};