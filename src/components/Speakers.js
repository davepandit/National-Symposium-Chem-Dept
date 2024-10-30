import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Environmental Scientist',
    organization: 'Global Sustainability Institute',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Renewable Energy Expert',
    organization: 'Tech University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Dr. Emily Williams',
    role: 'Sustainability Consultant',
    organization: 'EcoSolutions International',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

const Speakers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-green-100" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Speakers</h2>
          <p className="text-xl text-green-700">Learn from the world's leading sustainability experts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-700/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">{speaker.name}</h3>
                <p className="text-green-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-green-500">{speaker.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;