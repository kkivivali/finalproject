import React from 'react'
//import { Route, Routes } from 'react-router-dom'
import '../App.scss';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext';
import { useState } from 'react';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email,  password)
            navigate('/Account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
  return (
    <div>Welcome to the registration Page
        <div className='loginForm'>
            <form onSubmit={handleSubmit}>
                <div className='emailForm'>
                    <label className='username'>Email Address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" />      
                </div>          
                <div className='passwordForm'>
                    <label className='password'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}type="password" />
                </div>
                <button className='formRegBtn'>Registreeri</button>
            </form>
        </div>
    </div>
  )
}

export default Signup