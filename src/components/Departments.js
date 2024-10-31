import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const departments = [
  {
    name: 'Chemical Engineering',
    description: 'Pioneering sustainable chemical processes and green technologies for a cleaner future.',
    projects: ['Bio-based materials', 'Carbon capture technologies', 'Waste-to-energy solutions'],
  },
  {
    name: 'Civil Engineering',
    description: 'Developing eco-friendly infrastructure and sustainable construction practices to build resilient cities.',
    projects: ['Green building design', 'Sustainable urban planning', 'Water resource management'],
  },
  {
    name: 'Electrical and Electronics Engineering',
    description: 'Advancing renewable energy systems and smart grid technologies for efficient power distribution.',
    projects: ['Solar power integration', 'Smart grid optimization', 'Energy-efficient electronics'],
  },
  {
    name: 'Mechanical Engineering',
    description: 'Innovating in energy-efficient systems and sustainable manufacturing processes.',
    projects: ['Electric vehicle technology', 'Renewable energy harvesting', 'Sustainable manufacturing'],
  },
  {
    name: 'Computer Science and Engineering',
    description: 'Applying AI and machine learning to tackle environmental challenges and optimize resource usage.',
    projects: ['AI for climate modeling', 'Smart city technologies', 'Energy-efficient computing'],
  },
  {
    name: 'Electronics and Communication Engineering',
    description: 'Developing IoT solutions for environmental monitoring and control to create smarter, greener systems.',
    projects: ['IoT for precision agriculture', 'Wireless sensor networks', 'Low-power communication systems'],
  },
];

const Departments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white" id="departments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">NITK Departments</h2>
          <p className="text-xl text-gray-600">
            Collaborating across disciplines to address sustainability challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{dept.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Key Projects:</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {dept.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;