import React, { useState } from 'react'
import useObj from '../../useObj';
import './Register.css'

async function registerUser(data){
    return fetch(`http://localhost:8080/user/registerUser`, {
        method: 'POST',
        headers:{
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    /* .then(data => console.log(data)) */
    .catch(err => console.log(err))
}

const Register = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("");
    
    const {obj, setObj} = useObj()

    const nameAux = document.getElementById("name")
    const ageAux = document.getElementById('age')
    const emailAux = document.getElementById('email')
    const userNameAux = document.getElementById('userName')
    const passwordAux = document.getElementById('password')

    const handleSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name: name,
            age: age,
            email: email,
            userName: userName,
            password: password
        }
        /* PRECISA DE TRATAÇÃO DE ERRO para erros do backend */
        const response = await registerUser(newUser);
        console.log(response)
        if(response){
          setObj(response)
          window.location.href = '/home'
        }else{
          
        }
        
    }

    const handleValidation = (e) => {
        e.preventDefault()
        if(name === "" || userName === "" || password === "") {
          document.getElementById('emptyInput').textContent = 'Preencha todos os campos !'
          nameAux.value = ""
          setName("")
          ageAux.value = ""
          setAge("")
          emailAux.value = ""
          setEmail("")
          userNameAux.value = ""
          setuserName("")
          passwordAux.value = ""
          setPassword("")
          nameAux.focus()
        }else{
          handleSubmit(e);
        }
      }

  return (
    <div className='register'>
      <form onSubmit={handleValidation} className='card'>
        <div className='card-header'>
          <h2>Cadastrar-se</h2> <label id='emptyInput'></label>
        </div>
        <div className='card-content'>
          <div className='card-content-area'>
            <label>Nome</label>
            <input type="text" id='name' onChange={e => setName(e.target.value)} />
          </div>
          <div className='card-content-area'>
            <label>Idade</label>
            <input type="number" id='age' onChange={e => setAge(e.target.value)} />
          </div><div className='card-content-area'>
            <label>E-mail</label>
            <input type="email" id='email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='card-content-area'>
            <label>Nome de Usuário</label>
            <input type="text" id='userName' onChange={e => setuserName(e.target.value)} />
          </div>
          <div className='card-content-area'>
            <label>Senha</label>
            <input type="password" id='password' onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='card-footer'>
          <button type="submit" className='submit'>Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Register