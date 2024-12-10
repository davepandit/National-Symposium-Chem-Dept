import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakers = [
  {
    name: 'Prof. Tanmay Basak',
    title: 'IIT Madras',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Prof. Pradeep R Nair',
    title: 'IIT Bombay',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Prof. R. Vinu',
    title: 'IIT Madras',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Prof. P C Abhilash',
    title: 'IIT BHU Varanasi',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Prof. Sanjeev Chaudhari',
    title: 'IIT Bombay',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Nikhil Dhawan',
    title: 'IIT Roorkee',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Manoj P Samuel',
    title: 'Executive Director of CWRDM, Kozhikode',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Chenna Rao Borra',
    title: 'IIT Kharagpur',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Sivaraman Savithri',
    title: 'CSIR NIIST',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. T.C.S.M. Gupta',
    title: 'Senior Vice President, R&D, Apar Industries Limited Mumbai',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Venkata Vanukuru',
    title: 'Technical Director/DMTS, GLOBALFOUNDRIES',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Somashekhar S Hiremath',
    title: 'Professor, Department of Mechanical Engineering, IIT Madras',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Madhav Dhananjaya Gadgil',
    title: 'Prominent Indian Ecologist',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  },
  {
    name: 'Dr. Kota Ullas Karanth',
    title: 'NITK Alumni',
    image: 'https://via.placeholder.com/400x400?text=Speaker+Image'
  }
];

// Add error handling for images
const SpeakerImage = ({ src, alt }) => {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative h-64">
      <img
        src={error ? 'https://via.placeholder.com/400x500?text=Image+Not+Available' : src}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};

const Speakers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Distinguished Speakers</h2>
          <p className="text-xl text-gray-600">
            Leading experts from various departments at NITK
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
              <p className="text-green-600">{speaker.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;