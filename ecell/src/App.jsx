import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/page2' && <Navbar />}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
};

export default App;
