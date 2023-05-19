import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password
            });
            alert('Registretion successfull. Now you can  log in')
        }

        catch (e) {
            alert('Registration failed, Try again');
        }
    }


    return (
        <div className=' grow flex items-center justify-around'>
            <div className=''>
                <h1 className='text-3xl text-center'>Register</h1>
                <form
                    className='max-w-md mx-auto p-3'
                    onSubmit={handleRegister}
                >
                    <input
                        className='focus:outline-none'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                        placeholder="John Doe"
                    />
                    <input
                        className='focus:outline-none'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder="Your E-mail"
                    />

                    <input
                        className='focus:outline-none'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        placeholder="Password"
                    />

                    <button className='primary'>Register</button>
                    <div className='text-center py-4 text-gray-500'>
                        Already a member?
                        <Link className='underline text-black' to={'/login'}>Login Now</Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage