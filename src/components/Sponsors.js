import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sponsorshipImage from "../img/Sponsor Flyer_page-0001.jpg";
import qrCodeImage from "../img/WhatsApp Image 2025-01-01 at 11.35.47.jpeg";
import anrfLogo from "../img/PHOTO-2025-01-24-19-36-23.jpg";
import aparLogo from "../img/image copy 5.png";
import durgaChemicalsLogo from "../img/image copy 4.png";
import acsLogo from "../img/acsLogo.webp";
import genNextLogo from "../img/genNextLogo.webp";
import royalLogo from "../img/royalLogo.png";
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
import siddi from "../img/siddi.jpg"
import eskaray from "../img/essarkay.png"
import quadri from "../img/quandravalet labs.png"
import rkfunr from "../img/rakesh shenoy furnitures.png"
import thieme from "../img/Thieme publishers.png"
import wiley from "../img/Wiley publishers.png"
import pspl from "../img/PSPL logo.png"

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Organized sponsors by tier
  const sponsorTiers = {
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
      {
        name: "PSPL",
        logo: pspl,
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

  const SponsorTier = ({ title, sponsors, gridCols, logoSize, backgroundColor = "bg-white" }) => (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <div className={`grid ${gridCols} gap-4 md:gap-6`}>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 }}
            className={`${backgroundColor} rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow`}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`object-contain ${logoSize}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-16 bg-white" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Sponsors</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          <div className="space-y-8">
            {/* Diamond Tier */}
            {sponsorTiers.diamond.length > 0 && (
              <SponsorTier
                title="Diamond Sponsors"
                sponsors={sponsorTiers.diamond}
                gridCols="grid-cols-2 md:grid-cols-2"
                logoSize="w-36 h-24"
                backgroundColor="bg-blue-50"
              />
            )}
            
            {/* Gold Tier */}
            {sponsorTiers.gold.length > 0 && (
              <SponsorTier
                title="Gold Sponsors"
                sponsors={sponsorTiers.gold}
                gridCols="grid-cols-1 md:grid-cols-2"
                logoSize="w-32 h-20"
                backgroundColor="bg-yellow-50"
              />
            )}
            
            {/* Silver Tier */}
            {sponsorTiers.silver.length > 0 && (
              <SponsorTier
                title="Silver Sponsors"
                sponsors={sponsorTiers.silver}
                gridCols="grid-cols-2 md:grid-cols-2"
                logoSize="w-28 h-18"
                backgroundColor="bg-gray-50"
              />
            )}
          </div>
          
          <div className="space-y-8">
            {/* Bronze Tier */}
            {sponsorTiers.bronze.length > 0 && (
              <SponsorTier
                title="Bronze Sponsors"
                sponsors={sponsorTiers.bronze}
                gridCols="grid-cols-2 md:grid-cols-3"
                logoSize="w-24 h-16"
                backgroundColor="bg-orange-50"
              />
            )}
            
            {/* Miscellaneous */}
            {sponsorTiers.miscellaneous.length > 0 && (
              <SponsorTier
                title="Miscellaneous Sponsors"
                sponsors={sponsorTiers.miscellaneous}
                gridCols="grid-cols-2 md:grid-cols-4"
                logoSize="w-20 h-14"
              />
            )}
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {/* Best Poster Awards */}
          {sponsorTiers.bestPosterAwards.length > 0 && (
            <SponsorTier
              title="Best Poster Awards Sponsors"
              sponsors={sponsorTiers.bestPosterAwards}
              gridCols="grid-cols-2 md:grid-cols-3"
              logoSize="w-28 h-16"
              backgroundColor="bg-green-50"
            />
          )}
          
          {/* Publication Partners */}
          {sponsorTiers.publicationPartners.length > 0 && (
            <SponsorTier
              title="Publication Partners"
              sponsors={sponsorTiers.publicationPartners}
              gridCols="grid-cols-2 md:grid-cols-2"
              logoSize="w-28 h-16"
              backgroundColor="bg-purple-50"
            />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Information for Prospective Sponsors/Partners
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8 text-lg">
              Thank You for showing your interest in sponsoring AFMECA-2025. The
              following Sponsorship categories available:
            </p>

            <img
              src={afmeca_sponsor}
              alt="Sponsorship Details"
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <div className="text-left mt-8 bg-gray-50 p-8 rounded-lg">
              <div className="space-y-8">

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/2">
                    <h4 className="font-semibold mb-2">
                      Regular donations: as per the brochure*
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Account : NITK SURATHKAL</li>
                      <li>Account No. : 37772503911</li>
                      <li>Bank Name : SBI, NITK</li>
                      <li>IFSC Code : SBIN0002273</li>
                      <li>MICR Code : 575002013</li>
                      <li>SWIFT Code : SBININBB146</li>
                      <li>UPI ID : xyz3911.948@sbi</li>
                    </ul>
                  </div>

                  <div className="md:w-1/2">
                    <h4 className="font-semibold mb-2">
                      CSR funds with 80G certificate:*
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        Name of the account holder : NITK/KREC Endowment Fund
                      </li>
                      <li>Account Number : 37481178720</li>
                      <li>
                        Name of the Bank : State Bank of India-Current Account
                      </li>
                      <li>Branch : Surathkal, Mangalore</li>
                      <li>
                        Address : Surathkal Branch, NITK Campus, P.O.
                        Srinivasanagar, DT Dakshina Kannada,575025
                      </li>
                      <li>
                        IFSC Code : SBIN0002273 (Used for RTGS, IMPS, and
                        NEFT transactions)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-semibold mb-2 space-y-2 text-gray-600">
              <sup>*</sup>An additional 18% GST will be added regular donations
              and For CSR fund there won't be any GST.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;