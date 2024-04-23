import axios from 'axios';
import React, { useState } from 'react'
import Left from './Left';
import Right from './Right';
import "./login.css"

export default function Query() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
        // console.log(name);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
        // console.log(phone);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        // console.log(email);
    }
    const handleQuery = (event) => {
        setQuery(event.target.value);
        // console.log(query);
    }

    const handleFormData = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post('http://localhost:3000/query', {
                name: name,
                phone: phone,
                email: email,
                query: query
            });
            if (res.status === 201) {
                setName('');
                setPhone('');
                setEmail('');
                setQuery('');
                // setText(res.data);
                alert("Query Posted Succesfully!");
            }
        } catch (error) {
            // setText("Query Not Posted Fill all the variables");
            alert("Query Not Posted Fill all the variables");
        }
    }
    return (
        <div>
            <div className='contain lft'><Left></Left></div>
                <div className='contain md'>
                    <div className='mid_container'>
                        <h2 className='mid_container_h2'>Queries</h2>
                        <hr></hr>
                    
                        <div className='loginPage container'>
                            <div className='header'>
                                <h2>Facing some issues?</h2>
                            </div>
                            <form onSubmit={handleFormData} className='form frm'>
                                <div className='form-group'>
                                    <input type='text' value={name} onChange={handleName} required className='input'></input>
                                    <label>Name: </label> 
                                </div>
                                <div className='form-group'>
                                    <input type='contact' value={phone} onChange={handlePhone} required className='input'></input>
                                    <label>Phone: </label> 
                                </div>
                                <div className='form-group'>
                                    <input type='email' value={email} onChange={handleEmail} required className='input'></input>
                                    <label>E-mail: </label> 
                                </div>
                                <div className='form-group'>
                                    <input type='text' value={query} onChange={handleQuery} required className='input'></input>
                                    <label>Query: </label> 
                                </div>
                                <button type='submit' className='btn'>Submit</button>
                            </form>
                            {/* <h2>{text}</h2> */}
                        </div>
                    </div>
                </div>
            <div className='contain rt'><Right></Right></div>
        </div>
    )
}