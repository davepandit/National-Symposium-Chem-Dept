import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmissionDropdown, setShowSubmissionDropdown] = useState(false);

  // Add delay timer for dropdown
  let dropdownTimer;

  const handleDropdownLeave = () => {
    dropdownTimer = setTimeout(() => {
      setShowSubmissionDropdown(false);
    }, 300);
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavItems = [
    "About",
    "Speakers",
    "Committee",
    "Accommodation",
    "Registration",
    "Venue",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <motion.img
                src="/favicon.png"
                alt="AFMECA-2025"
                className="h-10 w-10 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
              />
              <span className="text-2xl font-bold text-blue-500">
                AFMECA-2025
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center ml-auto">
            <div className="flex items-center space-x-8">
              {mainNavItems.map((item) =>
                typeof item === "string" ? (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="flex items-center space-x-1 whitespace-nowrap text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${
                          showSubmissionDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg transition-all duration-300 ${
                        showSubmissionDropdown
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`/${subItem.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) =>
                typeof item === "string" ? (
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
                    <button
                      onClick={() =>
                        setShowSubmissionDropdown(!showSubmissionDropdown)
                      }
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform duration-200 ${
                          showSubmissionDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {showSubmissionDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6"
                        >
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
