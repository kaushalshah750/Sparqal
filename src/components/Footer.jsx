import React from "react";
import logoWhite from '../assets/sparqal-logo-white.png';

const Footer = () => {
    return (
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                  <img src={logoWhite} alt="" className='w-40'/>
              </div>
              <p className="text-gray-400">
                Professional web development agency helping small businesses succeed online.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ongoing Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>hello@sparqal.com</p>
                <p>(555) 123-4567</p>
                <p>Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center ">
            <p className="text-gray-400">© 2025 Sparqal. All rights reserved.</p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            </div> */}
          </div>
        </div>
    </footer>
    )
}

export default Footer;