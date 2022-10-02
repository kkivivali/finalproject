import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate ();
  const handleLogout = async () =>{
    try {
      await logout();
      navigate('/');
      alert('You logged out')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div>
    <p>User Email: {user && user.email}</p>

    <button onClick={handleLogout}>Log Out</button>
 
  </div>
   )
}

export default Account