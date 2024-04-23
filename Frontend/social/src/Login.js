import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
import "./login.css"

export default function Login() {
    const navigate = useNavigate();
    const [loginUsername,setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginErr, setLoginErr] = useState('');

    const handleUsername =(event) =>{
        setLoginUsername(event.target.value);
        // console.log(username);
     }

     const handlePassword = (event) =>{
        setLoginPassword(event.target.value);
        // console.log(password);
     }

     const handleLoginData = async (event) => {
        try{
            event.preventDefault();
            const res = await axios.post("http://localhost:3000/login",{
                username:loginUsername,
                password:loginPassword,
            })
            if(res.status === 200){
                localStorage.setItem("token",res.data);
                navigate("/home");
                console.log("User logged in successfully!!!");
            }
        } catch (error){
            setLoginErr(alert("Invalid Credentials"));
        }
     }

  return (
    <div className='loginPage container'>
        <div className='header'>
            <img src='bird2.png' alt='logo'></img>
            <h1>Login to Twitter</h1>
        </div>     
        <form onSubmit={handleLoginData} className='form'>
            <div className='form-group'>
                <input type='text' value={loginUsername} onChange={handleUsername} required className='input'></input>
                <label>Username: </label> 
            </div>
            <div className='form-group'>
                <input type='password' value={loginPassword} onChange={handlePassword} required className='input'></input>
                <label>Password: </label>
            </div>
            <button type='submit' className='btn'>Sign In</button>
        </form>
        <div class="footer">
            <Link to={'/'}>Forgot password?</Link>
            <span>.</span>
            <Link to={'/register'}>Sign up for Twitter</Link>
        </div>
        <h2>{loginErr}</h2>
    </div>
  )
}
