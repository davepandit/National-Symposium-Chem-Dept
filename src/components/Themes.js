import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const themes = [
  {
    title: 'Water',
    description: 'Sustainable water management and conservation',
    icon: '💧',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    color: 'from-blue-400 to-blue-600',
    points: [
      'Wastewater treatment',
      'Sustainable water infrastructure',
      'Desalination',
      'AI and ML for Water Research',
      'Water quality, management & reuse',
      'Water conservation',
      'Ocean and Coastal Engineering',
      'Flood and Excess Rainfall-Induced Disaster'
    ]
  },
  {
    title: 'Earth (Materials)',
    description: 'Sustainable materials and waste management',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d',
    color: 'from-green-600 to-green-800',
    points: [
      'Advanced Materials (Nanomaterials, Biomaterials, Green lubricants)',
      'Circular Economy and Waste Management',
      'Soil Engineering and Natural Hazards (Foundation, Dynamics, Landslides)',
      'Sustainable Mining and Resource Management',
      'Smart Agriculture and IoT Applications',
      'Environmental Pollution Control and Remediation',
      'Processing of Waste Materials and Sludge'
    ]
  },
  {
    title: 'Air',
    description: 'Air quality and pollution control',
    icon: '💨',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda',
    color: 'from-sky-300 to-sky-500',
    points: [
      'Carbon Capture, Utilisation and Storage',
      'Air pollution control',
      'Particulate matter',
      'Air monitoring and emission research',
      'Air quality modeling'
    ]
  },
  {
    title: 'Fire (Energy)',
    description: 'Renewable energy and sustainable technologies',
    icon: '🔥',
    image: 'https://images.unsplash.com/photo-1496483353456-90997957cf99',
    color: 'from-orange-500 to-red-600',
    points: [
      'Hydrogen production and storage',
      'Renewable energy',
      'Thermochemical conversion',
      'Batteries, fuel cells, Supercapacitors',
      'AI and ML applications in Energy'
    ]
  },
  {
    title: 'Space (Climate)',
    description: 'Climate change and its impacts from a global perspective',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    color: 'from-indigo-800 to-purple-900',
    points: [
      'Climate change mitigation and adaption',
      'Global warming',
      'Environmental impact assessment',
      'Disaster Mitigation, Prevention and Management',
      'Low carbon economy'
    ]
  }
];

const ThemeCard = ({ theme, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={theme.image}
          alt={theme.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme.color} opacity-75 group-hover:opacity-90 transition-opacity duration-300`} />
      </div>
      
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="text-5xl mb-4"
        >
          {theme.icon}
        </motion.div>
        <motion.h3
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="text-3xl font-bold mb-2"
        >
          {theme.title}
        </motion.h3>
        <AnimatePresence>
          {!isHovered && (
            <motion.p
              key="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-white/90"
            >
              {theme.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="points"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-b ${theme.color} p-6 flex flex-col justify-center items-center`}
          >
            <h4 className="text-2xl font-bold text-white mb-4">{theme.title}</h4>
            <ul className="text-sm space-y-2 list-disc list-inside text-white">
              {theme.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Themes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-green-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Conference Themes</h2>
          <p className="text-xl text-green-700">
            Exploring the fundamental elements that shape our sustainable future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <ThemeCard key={theme.title} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;