import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icon library
import logoBlack from '../assets/sparqal-logo-black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={"/"} >
              <div className="flex items-center space-x-2">
                  <img src={logoBlack} alt="" className='w-40'/>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-all duration-300 transform hover:scale-105" onClick={() => openUrl('https://calendly.com/kaushalshah750/1-1-discussion')}>
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
                <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-colors w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
