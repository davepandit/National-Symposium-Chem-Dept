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
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Wanna be a Sponsor?</h2>
          <div className="max-w-4xl mx-auto">
            <img 
              src={sponsorshipImage} 
              alt="Sponsorship Details" 
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us and Become a Part</h3>
              <p className="text-gray-600">
                Join us in making CREST 2025 a remarkable event. Reach out to us for sponsorship opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
