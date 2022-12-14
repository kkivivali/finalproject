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
    <div>Welcome to the login Page
    <form onSubmit={handleSubmit}>
        <div className='loginForm'>
            <label className='username'>E-Mail</label>
            <input className='user' onChange={(e) => setEmail(e.target.value)} type="username" />
        </div>
        <div className='passwordForm'>
            <label className='password'>Password</label>
            <input  onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <button className='formLogBtn'>Logi Sisse</button>
    </form>
</div>
  )
}

export default Signin