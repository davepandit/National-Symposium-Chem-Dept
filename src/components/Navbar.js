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
    'Departments',
    'Accommodation',
    'Sightseeing',
    'Venue'
  
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <motion.img
              src="/favicon.png"
              alt="NITK CREST 2025"
              className="h-10 w-10 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <span className="text-xl font-bold text-gray-800">
              NITK - CREST <span className="text-green-600">2025</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex flex-1 justify-center max-w-4xl ml-8 mr-8">
            <div className="relative flex items-center w-full">
              {/* Scroll buttons */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('left')}
                className="absolute -left-6 z-10 p-1.5 rounded-md bg-white/90 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Nav items */}
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide w-full px-8">
                <div className="flex space-x-1 items-center pr-3">
                  {navItems.map((item) => (
                    item ? (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 px-3 py-2 rounded-md transition-all hover:bg-gray-50"
                      >
                        {item}
                      </Link>
                    ) : (
                      <div key="spacer" className="w-8" />
                    )
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('right')}
                className="absolute -right-6 z-10 p-1.5 rounded-md bg-white/90 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Registration Button */}
          <Link
            to="/registration"
            className="hidden md:block whitespace-nowrap px-4 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
          >
            Registration
          </Link>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 border border-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                item && (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )
              ))}
              <Link
                to="/registration"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                onClick={() => setIsOpen(false)}
              >
                Registration
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;