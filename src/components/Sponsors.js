import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sponsorshipImage from '../img/NITK-CREST2025 Sponsorship_page-0001.jpg';

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
                However, if you wish to sponsor a custom amount, you can also contribute using the payment options shown above.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                After the payment, please send an email to{' '}
                <a href="mailto:nitk-crest2025@nitk.edu.in" className="text-blue-600 hover:underline">
                  nitk-crest2025@nitk.edu.in
                </a>
                , with the following details:
              </h3>
              
              <p className="text-gray-600 mb-2 italic">Please use the subject "Sponsorship towards NITK-CREST 2025"</p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                <li>Name of the Organization and address</li>
                <li>Name of the contact Person</li>
                <li>Email ID of the contact person</li>
                <li>Mobile Number</li>
                <li>Amount Paid</li>
                <li>Date of Payment</li>
                <li>Screenshot of the payment details (it must include Transaction Number/UTR Number)</li>
                <li>Name on which the receipt has to be generated</li>
                <li>GST Number (if any)</li>
              </ul>

              <p className="text-gray-600 mb-6">
                You will be acknowledged with the payment receipt upon verifying your transaction details.
              </p>

              <p className="text-gray-600">
                For further details, please write to us:{' '}
                <a href="mailto:nitk-crest2025@nitk.edu.in" className="text-blue-600 hover:underline">
                  nitk-crest2025@nitk.edu.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
