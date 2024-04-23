import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import "./left.css"

export default function Left() {
    const navigate = useNavigate();
  return (
    <div className='left_container'>
        <img src='logo2.png' alt='logo' className='logo'></img>
        <div className='urls'>
            <div className='items items_active'>
                <img src='home.svg' alt='home_logo'/>
                <Link to="/home">Home</Link>
            </div>  
            <div className='items'>  
                <img src='explore.svg' alt='explore_logo'/>
                <Link to="/posts">Explore</Link>
            </div>
            <div className='items'>    
                <img src='about.png' alt='about_logo'/>
                <Link to="/about">About</Link>
            </div>
            <div className='items'>
                <img src='query.png' alt='query_logo'/>
                <Link to="/query">Query</Link>
            </div>
            <button onClick={()=>navigate('/post')} className='bbtn'>Tweet</button>
        </div>
    </div>
  )
}
