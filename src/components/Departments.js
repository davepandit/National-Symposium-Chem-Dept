import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const departments = [
  {
    name: 'Environmental Engineering',
    description: 'Developing sustainable solutions for environmental challenges',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Renewable Energy',
    description: 'Advancing clean energy technologies for a sustainable future',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Sustainable Architecture',
    description: 'Designing eco-friendly buildings and infrastructure',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Water Resources',
    description: 'Managing water resources for sustainable development',
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
  },
  {
    name: 'Waste Management',
    description: 'Innovative solutions for waste reduction and recycling',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Green Technologies',
    description: 'Developing eco-friendly technologies for various applications',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
          <h2 className="text-4xl font-bold text-green-800 mb-4">Participating Departments</h2>
          <p className="text-xl text-green-700">
            Bringing together expertise from various disciplines to address sustainability challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-green-100 text-sm">{dept.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;