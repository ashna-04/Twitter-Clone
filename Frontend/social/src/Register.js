import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios';  

export default function Register() {
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

     const handleUsername =(event) =>{
        setUsername(event.target.value);
        // console.log(username);
     }

     const handlePassword = (event) =>{
        setPassword(event.target.value);
        // console.log(password);
     }
    
     const handleRegisterData  = async (event) =>{
        try{
            event.preventDefault();
            const response =await axios.post("http://localhost:3000/register",{
                username:username,
                password:password,
            });
            if(response.status === 201){
                console.log("user registered");
                navigate("/login");
            }
        } catch(error){
            alert('Error registering user. Try again!');
        }
     }
  return (
    <div className='loginPage container'>
        <div className='header'>
            <img src='bird2.png' alt='logo'></img>
            <h1>Create an account</h1>
        </div>     
        <form onSubmit={handleRegisterData} className='form'>
            <div className='form-group'>
                <input type='text' value={username} onChange={handleUsername} required className='input'></input>
                <label>Username: </label> 
            </div>
            <div className='form-group'>
                <input type='password' value={password} onChange={handlePassword} required className='input'></input>
                <label>Password: </label>
            </div>
            <button type='submit' className='btn'>Create Acount</button>
        </form>
        <div class="footer">
            <p>Already have an account?</p>
            <span></span>
            <Link to={"/login"}>Sign in for Twitter</Link>
        </div>
    </div>
  )
}
