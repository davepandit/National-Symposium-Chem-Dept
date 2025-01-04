import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Linkedin } from 'react-feather';

const Footer = () => {
  const handleDownloadFlyer = () => {
    const flyerUrl = 'https://drive.google.com/file/d/1JUHoGtugiet3viuXjHuDypbwHlLZztMy/view?usp=sharing';
    window.open(flyerUrl, '_blank');
  };

  const handleDownloadBrochure = () => {
    const brochureUrl = 'https://drive.google.com/file/d/1AesHM2IqPo26ZOKvRdwtcMceMtuvvDiJ/view';
    window.open(brochureUrl, '_blank');
  };

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NITK - CREST 2025</h3>
            <p className="text-sm">Empowering Sustainable Futures</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nitk-crest2025" className="hover:text-green-300" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-300">About</Link></li>
              <li><Link to="/themes" className="hover:text-green-300">Themes</Link></li>
              <li><Link to="/committee" className="hover:text-green-300">Committee</Link></li>
              <li><Link to="/speakers" className="hover:text-green-300">Speakers</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact  Us</h4>
            <address className="not-italic">
              <p>National Institute of Technology Karnataka</p>
              <p>Surathkal, Mangalore - 575025</p>
              <p>Karnataka, India</p>
              
              <p>Website: www.nitk-crest2025.nitk.ac.in</p>
              <p>Email: nitk-crest2025@nitk.edu.in</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Downloads</h4>
            <div className="space-y-4">
              <button
                onClick={handleDownloadFlyer}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                <Download size={20} />
                <span>Download Flyer</span>
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                <Download size={20} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} NITK - CREST 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;