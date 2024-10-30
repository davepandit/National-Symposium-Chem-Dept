import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const themes = [
  {
    title: 'Water',
    description: 'Exploring sustainable water management and conservation techniques',
    icon: '💧',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'Energy',
    description: 'Harnessing renewable energy sources and reducing carbon emissions',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1547483238-2cbf881a559f',
    color: 'from-yellow-500 to-green-500',
  },
  {
    title: 'Earth',
    description: 'Promoting sustainable agriculture and land use practices',
    icon: '🌍',
    image:  'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d',
    color: 'from-green-500 to-green-700',
  },
  {
    title: 'Air',
    description: 'Developing clean air technologies and reducing pollution',
    icon: '💨',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda',
    color: 'from-green-300 to-green-500',
  },
  {
    title: 'Innovation',
    description: 'Utilizing cutting-edge technology for environmental monitoring',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    color: 'from-purple-500 to-green-500',
  },
];

const ThemeCard = ({ theme, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group h-96 overflow-hidden rounded-2xl shadow-lg"
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
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          className="text-lg text-white/90"
        >
          {theme.description}
        </motion.p>
      </div>
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