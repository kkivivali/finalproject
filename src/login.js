import React from 'react';
import './App.scss';
import Signin from './logincomp/Signin'
import Account from './logincomp/Account'
import Signup from './logincomp/Signup'
import { Routes, Route, Link } from 'react-router-dom';
import { AuthContextProvider } from './logincomp/context/AuthContext';
import ProtectedRoute from './logincomp/ProtectedRoute';

function Login () {
    return (
        <div className="login"> <Link to='/Signin' className='underline'>Logi Sisse</Link>
        <div className="login"> <Link to='/Signup' className='underline'>Registreeri</Link>
        <AuthContextProvider>
                <Routes>
                <Route path = '/Signup' element={<Signup />} />
                <Route path = '/Signin' element={<Signin />} />
                <Route path = '/Account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
                </Routes>
        </AuthContextProvider>
        </div>
        </div>
    );
}

export default Login