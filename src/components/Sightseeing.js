import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const hotels = [
  {
    name: 'Beach Heaven',
    image: 'https://via.placeholder.com/400x300?text=Beach+Heaven',
    description: 'Luxury beachfront hotel with scenic views'
  },
  {
    name: 'Sai Suraj International Hotel',
    image: 'https://via.placeholder.com/400x300?text=Sai+Suraj',
    description: 'Modern amenities with comfortable stay'
  },
  {
    name: 'Ocean Pearl',
    image: 'https://via.placeholder.com/400x300?text=Ocean+Pearl',
    description: 'Premium hotel with excellent service'
  },
  {
    name: 'Ginger',
    image: 'https://via.placeholder.com/400x300?text=Ginger',
    description: 'Smart basics for smart travelers'
  }
];

const Sightseeing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="sightseeing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Accommodation & Sightseeing</h2>
          <p className="text-xl text-gray-600">Explore comfortable stays near NITK</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
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

export default Sightseeing;
