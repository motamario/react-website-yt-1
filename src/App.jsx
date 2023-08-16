import React from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />


      </Routes>

    </div>
  )
}

export default App
// Hey, Don't forget to add this in the terminal: npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
