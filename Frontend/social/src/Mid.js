import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mid() {
    const navigate = useNavigate();
  return (
    <div className='mid_container'>
        <h2 className='mid_container_h2'>Home</h2>
        <div className='happening_box'>
            <input type='text' placeholder="What's happening?" className='textbox'></input>
            <div className='align'>
                <div className='align_images'>
                    <img src='photos.png' alt='photos'></img>
                    <img src='gif.png' alt='gif'></img>
                    <img src='emoji.png' alt='emoji'></img>
                </div>
                <span></span>
                <button onClick={()=>navigate("/post")} className='bttn'>Tweet</button>
            </div>
        </div>
        <div className='content'>
            <h2>Welcome to Twitter!</h2>
            <p>This is the best place to see what's happening in your world. Find some people and topics to follow now.</p>
            <button className='buton' onClick={()=>navigate("/posts")}>Let's Go!</button>
        </div>
    </div>
  )
}
