import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sponsorshipImage from '../img/Add a heading (210 x 297 mm) (2)_page-0001.jpg';
import qrCodeImage from '../img/WhatsApp Image 2025-01-01 at 11.35.47.jpeg';

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const platinumSponsors = Array(2).fill({
    name: 'Platinum Sponsor',
    logo: 'https://via.placeholder.com/300x150?text=Platinum+Sponsor'
  });

  const goldSponsors = Array(3).fill({
    name: 'Gold Sponsor',
    logo: 'https://via.placeholder.com/250x125?text=Gold+Sponsor'
  });

  const silverSponsors = Array(4).fill({
    name: 'Silver Sponsor',
    logo: 'https://via.placeholder.com/200x100?text=Silver+Sponsor'
  });

  const SponsorTier = ({ title, sponsors, gridCols }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">{title}</h3>
      <div className={`grid ${gridCols} gap-8`}>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-24 bg-white" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Sponsors</h2>
        </motion.div>

        <SponsorTier title="Platinum Sponsors" sponsors={platinumSponsors} gridCols="grid-cols-1 md:grid-cols-2" />
        <SponsorTier title="Gold Sponsors" sponsors={goldSponsors} gridCols="grid-cols-2 md:grid-cols-3" />
        <SponsorTier title="Silver Sponsors" sponsors={silverSponsors} gridCols="grid-cols-2 md:grid-cols-4" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Information for Prospective Sponsors/Partners</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8 text-lg">
              Thank You for showing your interest in sponsoring NITK-CREST 2025. The following Sponsorship categories available:
            </p>
            
            <img 
              src={sponsorshipImage} 
              alt="Sponsorship Details" 
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <div className="text-left mt-8 bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6">
                The contribution from the other sponsors will also be accepted.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Account Details for NEFT/RTGS Transfer</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Account: The Director, NITK Surathkal</li>
                  <li>Account No.: 37772503911</li>
                  <li>Bank Name: SBI, NITK</li>
                  <li>IFSC Code: SBIN0002273</li>
                  <li>MICR Code: 575002013</li>
                  <li>SWIFT Code: SBININBB146</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">UPI Payment</h4>
                <div className="max-w-xs mx-auto">
                  <img
                    src={qrCodeImage}
                    alt="UPI Payment QR Code"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                After payment, send the details as requested in the form -{' '}
                <a 
                  href="/documents/Format_details of funder.docx"
                  download="Format_details of funder.docx"
                  className="text-blue-600 hover:underline"
                >
                  Download Word Document
                </a>
                {' '}or{' '}
                <a 
                  href="/documents/Format_details of funder.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View PDF
                </a>
                {' '}and send to nitk-crest2025@nitk.edu.in
                with the subject "Sponsorship towards NITK-CREST 2025”
              </p>

              <p className="text-gray-600">
                Payments will be acknowledged with receipt, after the confirmation of transaction details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
