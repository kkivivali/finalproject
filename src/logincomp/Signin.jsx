import React from 'react'
import '../App.scss';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Account')
      alert('You logged in')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className='form'>Welcome to the login Page
    <form onSubmit={handleSubmit}>
        <div className='userForm'>
            <label className='username' >E-Mail</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail' type="username" />
        </div>
        <div className='passwordForm'>
            <label  className='password'>Password</label>
            <input  onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />
        </div>
        <button className="btn">Logi Sisse</button>
    </form>
</div>
  )
}

export default Signin