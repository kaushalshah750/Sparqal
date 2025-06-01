import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
