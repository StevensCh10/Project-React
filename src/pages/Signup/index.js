import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    function handleSignup(){
        if(!username | !password){
            setError("Preencha todos os campos")
        }

        alert("Usuário cadastrado com sucesso")
        navigate("/")
    }

    return(
        <div >
            <form >
                <h1>Signup</h1>
                <br></br> 
                <input type='text' placeholder='Username' value={username} onChange={(e) => [setUsername(e.target.value), setError("")]}/>
                <br></br>
                <br></br>
                <input type='password' placeholder='Password' value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}/>
                <br></br>
                <br></br>
                <button onClick={handleSignup}>Send</button>
            </form>
        </div>
    )
}

export default Signup