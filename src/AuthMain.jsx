import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';  // Your Login component
import Home from './components/Home';

const AuthMain = () => {
  return (
    <>

   <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

    </>
  )
}

export default AuthMain