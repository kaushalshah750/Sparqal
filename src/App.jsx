import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className='fixed bottom-0 right-0 z-50 rounded-2xl bg-black px-12 py-3 shadow-lg'>
        <h1 className='text-white'>Site is understand construction</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
