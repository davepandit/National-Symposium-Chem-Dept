import { motion } from "framer-motion";
import { Calendar, MapPin } from "react-feather";
import AtomModel from "./AtomModel";
import { Link } from "react-router-dom";
import nitkLogo from "../img/image copy 2.png";
import crfLogo from "../img/crf03.png";
// Import sponsor logos
import anrfLogo from "../img/PHOTO-2025-01-24-19-36-23.jpg";
import acsLogo from "../img/acsLogo.webp";
import genNextLogo from "../img/genNextLogo.webp";
import royalLogo from "../img/royalLogo.png";
import aparLogo from "../img/image copy 5.png";
import aromazenLogo from "../img/aromazen.jpg";
import afmeca_sponsor from "../img/afmeca_sponsorship.png";
import bob from "../img/bob.png"
import thermofisher from "../img/Thermofisher.png"
import canarabank from "../img/CanaraBank.png"
import springer from "../img/SpringerNature.png"
import cardolite from "../img/Cardolite.png"
import sea6 from "../img/Sea6.png"
import kalbavi from "../img/Kalbavi.png"
import samvitti from "../img/SamvittiCapital.png"
import srico from "../img/Srico.png"
import adani from "../img/Adani-power-logo.png"
import gmpl from "../img/GMPL.png"
import scdcc from "../img/scdcc.jpeg"
import horiba from "../img/HORIBA LOGO RGB (1).jpg"
import tsar from "../img/TSAR labcare.png"
import chemscene from "../img/ChemScene-logo  (2).jpg"
import ongc from "../img/MRPL ONGC.png"
import worldsc from "../img/WORLD SCIENTIFIC.png"
import icici from "../img/ICICI.jpeg"
import bisleri from "../img/bisleri.png"
import sdles from "../img/SRI DURGA LAB - LOGO (1).jpg"
import siddi from "../img/siddi.png"
import eskaray from "../img/essarkay.png"
import quadri from "../img/quandravalet labs.png"
import rkfunr from "../img/rakesh shenoy furnitures.png"
import thieme from "../img/Thieme publishers.png"
import wiley from "../img/Wiley publishers.png"

const HeroSection = () => {

  const featuredSponsors = {
    diamond: [
      {
        name: "Adani Power",
        logo: adani,
      },
      {
        name: "GMPL",
        logo: gmpl,
      },
      {
        name: "NRF",
        logo: anrfLogo,
      },
      {
        name: "Aromazen",
        logo: aromazenLogo,
      },
    ],
    gold: [
      {
        name: "GenNext",
        logo: genNextLogo,
      },
    ],
    silver: [
      {
        name: "Bank of Baroda",
        logo: bob,
      },
      {
        name: "SCDCC",
        logo: scdcc,
      }
    ],
    bronze: [
      {
        name: "Horiba",
        logo: horiba,
      },
      {
        name: "TSAR",
        logo: tsar,
      },
      {
        name: "Chem Scene",
        logo: chemscene,
      },
      {
        name: "ONGC",
        logo: ongc,
      },
      {
        name: "World Scientific",
        logo: worldsc,
      },
      {
        name: "ICICI Bank",
        logo: icici,
      },
      {
        name: "Canara Bank",
        logo: canarabank,
      },
      {
        name: "Sea6 Energy",
        logo: sea6,
      },
      {
        name: "Kalbavi",
        logo: kalbavi,
      },
    ],
    miscellaneous: [
      {
        name: "Samvitti Capital",
        logo: samvitti,
      },
      {
        name: "Srico",
        logo: srico,
      },
      {
        name: "Springer Nature",
        logo: springer,
      },
      {
        name: "Cardolite",
        logo: cardolite,
      },
      {
        name: "Bisleri",
        logo: bisleri,
      },
      {
        name: "SDLES",
        logo: sdles,
      },
      {
        name: "Siddhi",
        logo: siddi,
      },
      {
        name: "Essraay",
        logo: eskaray,
      },
      {
        name: "Quadri",
        logo: quadri,
      },
      {
        name: "Rakesh Shenoy",
        logo: rkfunr,
      },
    ],
    bestPosterAwards: [
      {
        name: "ACS Publications",
        logo: acsLogo,
      },
      {
        name: "Royal Society Of Chemistry",
        logo: royalLogo,
      },
      {
        name: "Thieme",
        logo: thieme,
      },
    ],
    publicationPartners: [
      {
        name: "Wiley",
        logo: wiley,
      },
      {
        name: "Thieme",
        logo: thieme,
      }
    ],
  };

  return (
    <>
      <section className="relative h-[1900px] md:h-[1450px] overflow-hidden bg-deep-blue">
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

            {/* sponsors part */}
            <h2 className="text-xl font-semibold text-white mt-6 text-center">Sponsored By</h2>
            <div className="mt-4 w-full max-w-5xl mx-auto">
              {/* All sponsor tiers */}
              <div className="grid gap-6">
                {/* Diamond Sponsors */}
                <div>
                  <h3 className="text-sm font-medium text-blue-300 mb-2 text-center">Diamond Sponsors</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 place-items-center">
                    {featuredSponsors.diamond.map((sponsor, index) => (
                      <motion.div
                        key={`diamond-${index}`}
                        whileHover={{ scale: 1.05 }}
                        className="w-20 h-20 shadow-lg rounded-lg flex items-center justify-center bg-white/95 p-2"
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gold & Silver Sponsors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <h3 className="text-sm font-medium text-yellow-300 mb-2 text-center">Gold Sponsors</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 place-items-center">
                    {[...featuredSponsors.gold].map((sponsor, index) => (
                      <motion.div
                        key={`gold-${index}`}
                        whileHover={{ scale: 1.05 }}
                        className="w-16 h-16 shadow-lg rounded-lg flex items-center justify-center bg-white/95 p-2"
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                  </div>

                  <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-2 text-center">Silver Sponsors</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 place-items-center">
                    {[...featuredSponsors.silver].map((sponsor, index) => (
                      <motion.div
                        key={`silver-${index}`}
                        whileHover={{ scale: 1.05 }}
                        className="w-16 h-16 shadow-lg rounded-lg flex items-center justify-center bg-white/95 p-2"
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                  </div>
                </div>

                {/* Bronze and Miscellaneous Sponsors in two columns on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bronze Sponsors */}
                  <div>
                    <h3 className="text-sm font-medium text-amber-800 mb-2 text-center">Bronze Sponsors</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 place-items-center">
                      {featuredSponsors.bronze.map((sponsor, index) => (
                        <motion.div
                          key={`bronze-${index}`}
                          whileHover={{ scale: 1.05 }}
                          className="w-14 h-14 shadow-lg rounded-lg flex items-center justify-center bg-white/95 p-2"
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Miscellaneous Sponsors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2 text-center">Miscellaneous Sponsors</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 place-items-center">
                      {featuredSponsors.miscellaneous.map((sponsor, index) => (
                        <motion.div
                          key={`misc-${index}`}
                          whileHover={{ scale: 1.05 }}
                          className="w-14 h-14 shadow-lg rounded-lg flex items-center justify-center bg-white/95 p-2"
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div class="mt-4 lg:mt-11 text-center text-white text-2xl font-bold animate-pulse-text">
            🏆Best Poster Awards by ACS, RSC and 2 books by Thieme Publishers
          </div>
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
