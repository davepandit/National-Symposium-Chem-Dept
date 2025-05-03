import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import wiley from '../img/Wiley publishers.png';
import thieme from '../img/Thieme publishers.png';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50" id="publications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-4">Publications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Publication 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Wiley Publications</h3>
                <img src={wiley} alt="Wiley Publishers" className="h-4 md:h-10" />
              </div>
              <p className="text-gray-600 mb-6">
                Selected high quality papers will be published in {" "}
                <a href="https://onlinelibrary.wiley.com/journal/21944296"
                  className="underline hover:text-blue-500 transition-colors duration-300">
                  Energy Technology (3.6 IF)
                </a> and {" "}
                <a href="https://chemistry-europe.onlinelibrary.wiley.com/journal/23656549"
                  className="underline hover:text-blue-500 transition-colors duration-300">
                  ChemistrySelect (1.9 IF)
                </a>.
              </p>
            </motion.div>

            {/* Publication 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Thieme Publications</h3>
                <img src={thieme} alt="Thieme Publishers" className="h-6 md:h-12" />
              </div>
              <p className="text-gray-600 mb-4">
                Selected high quality papers will be published in {" "}
                <a href="https://www.thieme.de/en/thieme-chemistry/journals-synlett-54848.htm"
                  className="underline hover:text-blue-500 transition-colors duration-300">
                  SYNLETT journal
                </a>.
              </p>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Publications;