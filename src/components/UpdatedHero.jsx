import { motion } from "framer-motion";
import { Calendar, MapPin } from "react-feather";
import AtomModel from "./AtomModel";
import { Link } from "react-router-dom";
import nitkLogo from "../img/image copy 2.png";
import crfLogo from "../img/crf03.png";
import anrfLogo from "../img/PHOTO-2025-01-24-19-36-23.jpg";
import acsLogo from "../img/acsLogo.webp";
import genNextLogo from "../img/genNextLogo.webp";
import royalLogo from "../img/royalLogo.png";
import aparLogo from "../img/image copy 5.png";
import aromazenLogo from "../img/aromazen.jpg";
import bob from "../img/bob.png";
import thermofisher from "../img/Thermofisher.png";
import canarabank from "../img/CanaraBank.png";
import springer from "../img/SpringerNature.png";
import cardolite from "../img/Cardolite.png";
import sea6 from "../img/Sea6.png";
import kalbavi from "../img/Kalbavi.png";
import samvitti from "../img/SamvittiCapital.png";
import srico from "../img/Srico.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-[1650px] md:h-[1350px] overflow-hidden bg-deep-blue">
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
            <h1 className="text-lg md:text-xl lg:text-2xl text-white mb-4">
              5-day National Symposium on
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-blue-300">
              Advances in Functional Materials for Energy <br /> and Catalytic
              Applications
            </p>

            <p className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight text-white font-baskerville">
              AFMECA-2025
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

          {/* here goes the organised section  */}
          {/* Organized By Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 mt-8"
          >
            <h2 className="text-xl font-semibold text-white">Organized By</h2>
            <div className="flex gap-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-300 shadow-lg mb-2">
                  <img
                    src={nitkLogo}
                    alt="NITK Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-white max-w-[150px] text-center">
                  Department of Chemistry, NITK, Surathkal
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-300 shadow-lg mb-2">
                  <img
                    src={crfLogo}
                    alt="CRF Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-white max-w-[150px] text-center">
                  Central Research Facility, NITK, Surathkal
                </span>
              </motion.div>
            </div>

            {/* sponsors part  */}
            <h2 className="text-xl font-semibold text-white mt-8">
              Sponsored By
            </h2>
            <div className="flex flex-wrap md:grid md:grid-cols-4 justify-center gap-8 mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={anrfLogo}
                  alt="ANRF Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={acsLogo}
                  alt="APAR Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={royalLogo}
                  alt="Cezen Tech Logo"
                  className="w-full h-full 
                object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={genNextLogo}
                  alt="Durga Chemicals Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={aromazenLogo}
                  alt="New Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={bob}
                  alt="Bank of Baroda Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={thermofisher}
                  alt="Thermofisher Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={canarabank}
                  alt="Canara Bank Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={sea6}
                  alt="Sea6 Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={springer}
                  alt="Springer Nature Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={srico}
                  alt="Srico Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={samvitti}
                  alt="Samvitti Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={cardolite}
                  alt="Cardolite Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-20 overflow-hidden shadow-lg rounded-lg flex items-center justify-center bg-white p-2"
              >
                <img
                  src={kalbavi}
                  alt="Kalbavi Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* <div
            className="relative text-3xl mt-6 lg:mt-3 text-center hacker-glitch-text"
            data-text="Best Poster Awards by ACS"
          >
            Best Poster Awards by ACS and RSC
          </div> */}
          <div class="mt-4 lg:mt-11 text-center text-white text-2xl font-bold animate-pulse-text">
            🏆Best Poster Awards by ACS, RSC and 2 books by Thieme Publishers
          </div>

          {/*           <div class="mt-2 text-center text-white text-2xl font-bold animate-pulse-text">
            📕Book proceedings by Springer
          </div> */}
        </div>
      </section>
      {/* Scrolling News Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg py-3 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex whitespace-nowrap"
            >
              <div className="animate-marquee inline-block">
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Registration Start date: 20th Feb 2025.
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Deadline for Abstract Submission: 30th April 2025
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Abstract acceptance notification: 1st May 2025
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Registration End Date: 5th May 2025.
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Accommodation will be provided on prior request in
                  registration form.
                </span>{" "}
              </div>
              <div className="animate-marquee2 inline-block absolute">
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Registration Start date: 15th Feb 2025.
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Deadline for Abstract Submission: 30th April 2025
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Abstract acceptance notification: 1st May 2025
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Registration End Date: 5th May 2025.
                </span>
                <span className="text-blue-700 font-semibold px-4">
                  🔴 Accommodation will be provided on prior request in
                  registration form.
                </span>{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
