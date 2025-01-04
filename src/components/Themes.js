import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const themes = [
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
  },
  {
    title: 'Artificial Intelligence',
    description: 'Artificial intelligence for sustainable solutions',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    color: 'from-violet-600 to-violet-800',
    points: [
      'Machine Learning for Climate Prediction',
      'AI in Resource Optimization', 
      'Smart Environmental Monitoring',
      'Deep Learning for Sustainability',
      'Predictive Analytics for Environmental Changes',
      'AI-Driven Green Technologies'
    ]
  }
];

const ThemeCard = memo(({ theme, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative group h-[400px] w-full max-w-[350px] overflow-hidden rounded-2xl shadow-lg cursor-pointer backdrop-blur-sm transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={theme.image}
          alt={theme.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${theme.color} transition-opacity duration-700 ease-in-out`}
          animate={{ 
            opacity: isHovered ? 0.95 : 0.8
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center p-8 text-white">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <div className="text-6xl mb-6 transition-transform duration-500 ease-in-out">
                {theme.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center transition-all duration-500 ease-in-out">
                {theme.title}
              </h3>
              <p className="text-lg text-white text-center max-w-[280px] font-light transition-all duration-500 ease-in-out">
                {theme.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-start"
            >
              <ul className="text-sm space-y-3 list-disc">
                {theme.points.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="text-white/90 hover:text-white transition-all duration-300 ease-in-out"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

const Themes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-2">Conference Themes</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 place-items-center">
          {themes.map((theme, index) => (
            <ThemeCard key={theme.title} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;