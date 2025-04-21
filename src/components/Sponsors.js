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

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const platinumSponsors = [
    {
      name: "ANRF",
      logo: anrfLogo,
    },
  ];

  const otherSponsors = [
    {
      name: "ANRF",
      logo: anrfLogo,
    },
    {
      name: "ACS Publications",
      logo: acsLogo,
    },
    {
      name: "Royal Society Of Chemistry",
      logo: royalLogo,
    },
    {
      name: "GenNext",
      logo: genNextLogo,
    },
    {
      name: "Aromazen",
      logo: aromazenLogo,
    },
    {
      name: "Bank of Baroda",
      logo: bob,
    },
    {
      name: "Thermofisher",
      logo: thermofisher,
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
      name: "Springer Nature",
      logo: springer,
    },
    {
      name: "Srico",
      logo: srico,
    },
    {
      name: "Samvitti Capital",
      logo: samvitti,
    },
    {
      name: "Cardolite",
      logo: cardolite,
    },
    {
      name: "Kalbavi",
      logo: kalbavi,
    },

  ];

  const SponsorTier = ({ sponsors, gridCols, logoSize }) => (
    <div className="mb-16">
      <div className={`grid ${gridCols} gap-8`}>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
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
    <section ref={ref} className="py-24 bg-white" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Sponsors</h2>
        </motion.div>
        <SponsorTier
          sponsors={otherSponsors}
          gridCols="grid-cols-1 md:grid-cols-4"
          logoSize="w-32 h-20"
        />

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
                {/* button  */}
                {/* <div className="text-center">
                  <a
                    href="https://forms.gle/xmxaFxhUyGJvQEt27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-block"
                  >
                    Sponsor Registration Form
                  </a>
                </div> */}

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
                      <li>UPI ID : xyz3911.948@sbi</li>
                    </ul>
                  </div>

                  {/* qr  */}
                  {/* <div className="md:w-1/2 flex flex-col items-center">
                    <h4 className="font-semibold mb-2">UPI Details</h4>
                    <img
                      src={qrCodeImage}
                      alt="UPI Payment QR Code"
                      className="w-40 h-auto rounded-lg shadow-md"
                    />
                  </div> */}

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
                        NEFT transactions)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* confirmation text  */}
              {/* <p className="text-gray-600 mb-4">
                After payment, send the details as requested in the form -{" "}
                <a
                  href="/documents/Format_details of funder.docx"
                  download="Format_details of funder.docx"
                  className="text-blue-600 hover:underline"
                >
                  Download Word Document
                </a>{" "}
                or{" "}
                <a
                  href="/documents/Format_details of funder.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View PDF
                </a>{" "}
                and send to nitk-crest2025@nitk.edu.in with the subject
                "Sponsorship towards NITK-CREST 2025"
              </p>

              <p className="text-gray-600">
                Payments will be acknowledged with receipt, after the
                confirmation of transaction details.
              </p> */}
            </div>
            <div className="font-semibold mb-2 space-y-2 text-gray-600">
              <sup>*</sup>An additional 18% GST will be added regular donations
              and For CSR fund there won't be any GST.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
