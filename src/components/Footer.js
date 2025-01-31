import React from "react";
import { Link } from "react-router-dom";
import { Download, Linkedin, Instagram } from "react-feather";

const Footer = () => {
  const handleDownloadFlyer = () => {
    const link = document.createElement("a");
    link.href = "/documents/CREST 2025 Flyer New.pdf";
    link.download = "NITK-CREST 2025 Flyer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/documents/NITK-CREST - 2025  Brochure New.pdf";
    link.download = "NITK-CREST - 2025 Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AFMECA-2025</h3>
            <p className="text-sm">Empowering Sustainable Futures</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nitk-crest2025"
                className="hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/nitkcrest2025?igsh=a2M4M3VrbTZranV3&utm_source=qr"
                className="hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-green-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/themes" className="hover:text-green-300">
                  Themes
                </Link>
              </li>
              <li>
                <Link to="/committee" className="hover:text-green-300">
                  Committee
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-green-300">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic flex flex-col gap-y-3">
              <div>
                <p>Department of Chemistry, NITK -</p>
                <p>Surathkal, Mangalore,</p>
                <p>Karnataka - 575025</p>
              </div>

              <p>Website: www.nitk-crest2025.nitk.ac.in</p>
              <p>Email: afmeca2025@nitk.edu.in</p>
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
          <p>
            &copy; {new Date().getFullYear()} AFMECA-2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
