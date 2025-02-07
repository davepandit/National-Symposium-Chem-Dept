import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import guestHouseImage from '../img/guest-house.jpeg'

const stays = [
  {
    name: 'Vikram Sarabhai Guest House',
    image: guestHouseImage,
    description: 'Located on the western side of the National Highway (NH66), near the beach (Arabian Sea).'
  },
  {
    name: 'International Hostel',
    image: guestHouseImage,
    description: 'Located on the western side of the National Highway (NH66), near the beach (Arabian Sea).'
  },
  {
    name: 'Homi J Bhaba Guest House',
    image: guestHouseImage,
    description: 'Located on the western side of the National Highway (NH66), near the beach (Arabian Sea).'
  },
  {
    name: 'J C Bose Guest House',
    image: guestHouseImage,
    description: 'Located on the western side of the National Highway (NH66), near the beach (Arabian Sea).'
  },
];

const Accommodation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="accommodation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Accommodation</h2>
          <p className="text-lg text-red-600">Accommodation will be provided on prior request in
          registration form.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stays.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
