import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Left from './Left';
import Right from './Right';

export default function CreatePost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {

        if (localStorage.getItem("token")) {//to check if we are login or not
            
        } else {
            navigate('/login');
        }

    })
    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }
    const handleContent = (event) => {
        setContent(event.target.value);
        console.log(content);
    }
    const handleFormData = async (event) => {
        event.preventDefault();
        await axios.post(
            'http://localhost:3000/post',
            {
                title: title,
                content: content
            },
            {
                headers: {
                    authentication: "Bearer " + localStorage.getItem("token")
                }
            }
            );
        alert(`Post Created`);
        navigate('/posts');
    }
    return (
        <div>
            <div className='contain lft'><Left></Left></div>
            <div className='contain md'>
                <div className='mid_container'>
                    <h2 className='mid_container_h2'>Create Post</h2>
                    <hr></hr>
                    <div className='loginPage container'>
                        <div className='header tweetNow'>
                            <h2>Tweet Now!</h2>
                        </div>
                        <form onSubmit={handleFormData} className='form fm'>
                            <div className='form-group'>
                                <input type='text' value={title} onChange={handleTitle} required className='input'></input>
                                    <label>Title: </label> 
                            </div>
                            <div className='form-group'>
                                <input type='text' value={content} onChange={handleContent} required className='input'></input>
                                <label>Content: </label> 
                            </div>
                            <button type='submit' className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='contain rt'><Right></Right></div>
        </div>
    )
}