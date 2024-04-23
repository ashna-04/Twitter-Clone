import React from 'react'
import { useNavigate } from 'react-router-dom'
import './frontPage.css'

export default function FrontPage() {
    const navigate = useNavigate();
  return (
    <div className='outer'>
        <div className='image'>
            <img src='bird.png' alt='twitter logo' className='bird'></img>
        </div>
        <div className='inner'>
            <img src='bird2.png' alt='logo' className='logo2'></img>
            <h1>Happening Now</h1>
            <h3>Join Twitter today.</h3>
            {/* register */}
            <button className='btn-signup' onClick={()=>navigate('/register')}>Sign Up</button>
            {/* login */}
            <h4>Already have an account?</h4>
            <button className='btn-login' onClick={()=>navigate('/login')}>Sign In</button>
        </div>
    </div>
  )
}
