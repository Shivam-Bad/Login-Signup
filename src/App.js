import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import { Login } from './Components/Login/Login';
import HomePage from './Components/HomePage/Home.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={< HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
