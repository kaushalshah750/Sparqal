import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import SparqalLogin from './pages/Admin/Login';
import SparqalDashboard from './pages/Admin/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; // Import your global styles
import LeadsComponent from './pages/Admin/Leads';
import PortfolioComponent from './pages/Admin/Portfolio';

function App() {
  return (
    <>
      {/* <div className='fixed bottom-0 right-0 z-50 rounded-2xl bg-black px-12 py-3 shadow-lg'>
        <h1 className='text-white'>Site is understand construction</h1>
      </div> */}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SparqalLogin />} />
        <Route path='/dashboard' element={<SparqalDashboard />}>
          <Route path='leads' element={<LeadsComponent />} />
          <Route path='portfolio' element={<PortfolioComponent />} />
        </Route>
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
