import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { date: '15/11/2024', event: 'Abstract Submission begins' },
  { date: '25/12/2024', event: 'Last date for Abstract Submission' },
  { date: '05/01/2025', event: 'Notification of Acceptance' },
  { date: '30/01/2025', event: 'Early Bird Registration closes' },
  { date: '10/02/2025', event: 'Registration Deadline' },
  { date: '27/02/2025', event: 'Conference Begins' },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-white" id="timeline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Important Dates</h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="order-1 w-5/12 text-right pr-8">
                <p className="text-lg font-semibold text-green-600">{event.date}</p>
              </div>
              <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-green-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{event.event}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;