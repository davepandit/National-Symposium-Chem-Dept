import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const textColor = scrolled || !isHomePage ? 'text-gray-800' : 'text-white';
  const bgColor = scrolled || !isHomePage ? 'bg-white/90' : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${bgColor} backdrop-blur-md ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-bold ${
                  scrolled || !isHomePage ? 'text-green-600' : 'text-white'
                }`}
              >
                🌱 Crest
              </motion.span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Themes', 'Departments', 'Speakers', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-green-500 ${textColor}`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg hover:bg-green-100/10"
          >
            <svg
              className={`w-6 h-6 ${textColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;