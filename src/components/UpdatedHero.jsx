import { motion } from "framer-motion";
import { Calendar, MapPin } from "react-feather";
import AtomModel from "./AtomModel";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-deep-blue">
      {/* Atom Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          filter: "blur(3px)",
        }}
      />

      {/* Atom Model */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AtomModel />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
            5 days National Symposium on
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-300 mb-8">
            Advances in Functional Materials for Energy and Catalytic Applications
          </p>

          {/* deadline thing  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base text-gray-800">
                7<sup>th</sup> May - 11<sup>th</sup> May 2025
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base text-gray-800">
                NITK, Surathkal
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="mt-8"
          >
            <Link to="/registration">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 md:px-8 md:py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                Register Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
