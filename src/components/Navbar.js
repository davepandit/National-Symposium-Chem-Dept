import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  // Scroll handler function
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    'About',
    'Themes',
    'Timeline',
    'Publications',
    'Speakers',
    'Committee',
    'Contact',
    'Registration',
    'Departments',
    'Venue',
    'Accommodation',
    'Sightseeing'
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <motion.img
              src="/favicon.png"
              alt="NITK CREST 2025"
              className="h-10 w-10 rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-2xl font-bold text-green-600">
              NITK - CREST 2025
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex flex-1 justify-center max-w-4xl ml-8">
            <div className="relative flex items-center w-full">
              {/* Scroll buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll('left')}
                className="absolute -left-2 z-10 p-1.5 rounded-full bg-white/80 shadow-md hover:bg-white"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Nav items */}
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide w-full px-8">
                <div className="flex space-x-6 items-center">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 px-3 py-2 rounded-full transition-all hover:bg-gray-50"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll('right')}
                className="absolute -right-2 z-10 p-1.5 rounded-full bg-white/80 shadow-md hover:bg-white"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;