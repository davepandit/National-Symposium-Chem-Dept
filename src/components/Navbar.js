import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmissionDropdown, setShowSubmissionDropdown] = useState(false);

  // Add delay timer for dropdown
  let dropdownTimer;

  const handleDropdownLeave = () => {
    dropdownTimer = setTimeout(() => {
      setShowSubmissionDropdown(false);
    }, 300); // Increased delay to 300ms
  };

  const handleDropdownEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowSubmissionDropdown(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    'About',
    'Speakers',
    'Committee',
    { 
      name: 'Submission',
      subItems: ['Abstract', 'Timeline', 'Themes', 'Publications']
    },
    'Accommodation',
    'Sponsors',
    'Registration',
    'Venue',
    'Contact'
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

          <div className="hidden md:flex items-center justify-center flex-1 ml-auto">
            <div className="flex items-center space-x-8">
              {mainNavItems.map((item) => (
                typeof item === 'string' ? (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      {item.name}
                    </button>
                    {showSubmissionDropdown && (
                      <div 
                        className="absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/${subItem.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                typeof item === 'string' ? (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <div key={item.name} className="py-2">
                    <div className="px-3 py-2 text-base font-medium text-gray-600">
                      {item.name}
                    </div>
                    <div className="pl-6">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`/${subItem.toLowerCase()}`}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;