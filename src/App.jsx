import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './Display'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
