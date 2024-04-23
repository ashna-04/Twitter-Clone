import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Right() {
    const navigate = useNavigate(); 
  return (
    <div className='box'>
        <input type='text' placeholder='Search Twitter' className='search'></input>
        <div className='innerBox'>
            <h4>Who to follow</h4>
            <div className='follow'>
                <img src='elonMusk.jpg' alt='Elon Musk'></img>
                <div className='username'>
                    <div className='bluetick'>
                        <h5>@elonmusk</h5>
                        <img alt='buletick' src='bluetick.png'></img>
                    </div>
                    <p>@elonmusk</p>
                </div>
                <button className='b'>Follow</button>
            </div>
            <div className='follow'>
                <img src='modi.png' alt='Narendar Modi'></img>
                <div className='username'>
                    <div className='bluetick'>
                        <h5>@narendarmodi</h5>
                        <img alt='buletick' src='bluetick.png'></img>
                    </div>
                    <p>@narendarmodi</p>
                </div>
                <button className='b'>Follow</button>
            </div>
            <div className='follow'>
                <img src='science.png' alt='Science'></img>
                <div className='username'>
                    <div className='bluetick'>
                        <h5>@sciencefacts</h5>
                        {/* <img alt='buletick' src='bluetick.png'></img> */}
                    </div>
                    <p>@sciencefacts</p>
                </div>
                <button className='b'>Follow</button>
            </div>
            <p>Show More</p>
        </div>
        <div>
            <button onClick={()=>{localStorage.removeItem('token')}} className='bbtn'>Logout</button>
        </div>
    </div>
  )
}