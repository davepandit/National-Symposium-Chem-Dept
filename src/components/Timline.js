import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  { date: '15/11/2024', event: 'Abstract Submission begins' },
  { date: '25/12/2024', event: 'Last date for Abstract Submission' },
  { date: '05/01/2025', event: 'Notification of Acceptance' },
  { date: '30/01/2025', event: 'Early Bird Registration closes' },
  { date: '10/02/2025', event: 'Registration Deadline' },
  { date: '27/02/2025', event: 'Conference Begins' },
];

const TimelineItem = ({ event, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      className="mb-8 flex items-center w-full group"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        delay: 0.1
      }}
    >
      <div className="flex items-center flex-shrink-0">
        <motion.div 
          className="w-32 mr-2 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg font-semibold text-green-600">{event.date}</p>
        </motion.div>

        <motion.div 
          className="z-20 flex items-center bg-green-600 shadow-xl w-8 h-8 rounded-full flex-shrink-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            backgroundColor: "#166534" 
          }}
        >
          <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
        </motion.div>
      </div>

      <motion.div 
        className="flex-grow ml-4"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="bg-green-100 rounded-lg shadow-xl px-6 py-4"
          whileHover={{ 
            backgroundColor: "#dcfce7",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-bold text-gray-800 text-xl md:text-lg sm:text-base">{event.event}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-white" id="timeline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={headerRef}
          className="text-4xl font-bold text-center text-gray-800 mb-12 sm:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Important Dates
        </motion.h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;