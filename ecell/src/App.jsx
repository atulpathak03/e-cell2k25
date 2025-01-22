import React from 'react'
import { Routes, Route } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>
    </div>
  )
}

export default App