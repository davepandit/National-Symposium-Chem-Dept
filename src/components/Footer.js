import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CREST 2024</h3>
            <p className="text-sm">Empowering Sustainable Futures</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-green-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-green-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-green-300"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-300">About</Link></li>
              <li><Link to="/themes" className="hover:text-green-300">Themes</Link></li>
              <li><Link to="/departments" className="hover:text-green-300">Departments</Link></li>
              <li><Link to="/speakers" className="hover:text-green-300">Speakers</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>National Institute of Technology Karnataka</p>
              <p>Surathkal, Mangalore - 575025</p>
              <p>Karnataka, India</p>
              <p className="mt-2">Email: crest2024@nitk.edu.in</p>
              <p>Phone: +91 824 2474000</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="mb-4">Stay updated with our newsletter</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} CREST Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;