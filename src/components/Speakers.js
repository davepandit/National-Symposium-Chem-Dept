import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tanmayBasak from '../img/tanmay basak.jpeg';
import pradeepNair from '../img/Predeep R Nair.jpeg';
import rVinu from '../img/r vinu.jpeg';
import pcAbhilash from '../img/Purushothaman C. Abhilash.jpeg';
import nikhilDhawan from '../img/nikhil dhawan.jpeg';
import manojSamuel from '../img/manoj p samuel.jpeg';
import chennaRao from '../img/chenna rao.jpeg';
import venkata from '../img/Venkata Vanukuru.jpeg';

const dummySpeaker = 'https://via.placeholder.com/200x200?text=Speaker';

const speakers = [
  {
    name: 'Prof. Tanmay Basak',
    title: 'IIT Madras',
    image: tanmayBasak
  },
  {
    name: 'Prof. Pradeep R Nair',
    title: 'IIT Bombay',
    image: pradeepNair
  },
  {
    name: 'Prof. R. Vinu',
    title: 'IIT Madras',
    image: rVinu
  },
  {
    name: 'Prof. P C Abhilash',
    title: 'IIT BHU Varanasi',
    image: pcAbhilash
  },
  {
    name: 'Dr. Nikhil Dhawan',
    title: 'IIT Roorkee',
    image: nikhilDhawan
  },
  {
    name: 'Dr. Manoj P Samuel',
    title: 'CWRDM, Kozhikode',
    image: manojSamuel
  },
  {
    name: 'Dr. Chenna Rao Borra',
    title: 'IIT Kharagpur',
    image: chennaRao
  },
  {
    name: 'Dr. T.C.S.M. Gupta',
    title: 'Apar Industries Limited Mumbai',
    image: dummySpeaker
  },
  {
    name: 'Dr. Venkata Vanukuru',
    title: 'GLOBALFOUNDRIES',
    image: venkata
  },
  {
    name: 'Dr. Somashekhar S Hiremath',
    title: 'IIT Madras',
    image: dummySpeaker
  },
  {
    name: 'Shri. Dilip Kumar Dalei',
    title: 'DRDO',
    image: dummySpeaker
  }
].filter(speaker => speaker.name !== 'Prof. Sanjeev Chaudhari');

const SpeakerCard = ({ speaker, index, inView }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-48 h-48 rounded-full overflow-hidden relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
          )}
          <img
            src={imageError ? dummySpeaker : speaker.image}
            alt={speaker.name}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ${
              !imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
      <p className="text-green-600">{speaker.title}</p>
    </motion.div>
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
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;