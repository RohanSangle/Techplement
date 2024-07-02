import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import {Route} from 'react-router';
import './App.css'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import Register from './pages/Auth/Register/Register.jsx'
import Quotes from './pages/Quotes/Quotes.jsx'
import ProtectedRoute from './pages/Auth/ProtectedRoute/ProtectedRoute.jsx'
// import {AuthProvider} from './contexts/authContext.js'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>

        <Route path="/quotes" element={<ProtectedRoute />}>
          <Route path="/quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
