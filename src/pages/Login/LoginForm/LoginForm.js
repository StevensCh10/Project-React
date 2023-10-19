import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import { Link } from 'react-router-dom';

async function loginUser(username, password) {
 return fetch(`http://localhost:8080/login/${username}/${password}`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
   .catch(err => console.log(err))
}

export default function LoginForm({ setObj }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameAux = document.getElementById('userName')
  const passwordAux = document.getElementById('password')

  const subValidation = (labelValue) => {
    document.getElementById('emptyInput').textContent = labelValue
    userNameAux.value = ""
    setUserName("")
    passwordAux.value = ""
    setPassword("")
    userNameAux.focus()
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const obj = await loginUser(
      userName,
      password
    );
    if(obj === undefined){
      subValidation('Cadastro não encontrado!')
    }else{
      setObj(obj);
    }
  }

  const handleValidation = (e) => {
    e.preventDefault()
    if(userName === "" || password === "") {
      subValidation('Preencha todos os campos!')
    }else{
      handleSubmit(e);
    }
  }

  return(
    <div className="login">
      <form onSubmit={handleValidation} className='card'>
        <div className='card-header'>
          <h2>Login</h2> <label id='emptyInput'></label>
        </div>
        <div className='card-content'>
          <div className='card-content-area'>
            <label>Nome de Usuário</label>
            <input type="text" id='userName' onChange={e => setUserName(e.target.value)} />
          </div>
          <div className='card-content-area'>
            <label>Senha</label>
            <input type="password" id='password' onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='card-footer'>
          <button type="submit" className='submit'>Logar</button>
          <Link to='/register'>Cadastrar-se</Link>
        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  setObj: PropTypes.func.isRequired
};