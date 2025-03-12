import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import acHegdeImage from "../committee/A_C_Hegde.jpg";
import raviImage from "../committee/B. Ravi.jpg";
import darshakImage from "../img/darshak-trivedi.jpg";
import sibshankarImage from "../img/sib-shankar-mal.jpg";
import lakshmiImage from "../img/Lakshmi-Vellanki.jpg";
import nityanadImage from "../img/Nityananda-shetty.jpg";
import ramchandraImage from "../img/B-Ramchandra-Bhat.jpg";
import krishnaImage from "../img/Krishna-Bhat.jpg";
import udayImage from "../img/udaya-kumar-d.jpg";
import beneeshImage from "../img/Beeneesh-P-B.jpg";
import debashreeImage from "../img/debashree-chakroborty.jpg";
import saikatImage from "../img/Saikit-Dutta.jpg";
import vijayendraImage from "../img/Vijayendra-shetty.jpg";
import dwarkishImage from "../img/Dwarkish-GS.jpg";
import udayBhatImage from "../img/Uday Bhat.jpg";
import gangadharanImage from "../img/K V Gangadharan_Medium.jpg";
import laxminidhiImage from "../img/T-Laxminidhi.png";
import keyurImage from "../img/keyur-raval.jpg";
import arunImage from "../img/arun-m-isloor.jpg";
import prasanaImage from "../img/prasanaimage.jpg";
import { image } from "framer-motion/client";

const dummyMember = "https://via.placeholder.com/200x200?text=Member";

const committeeData = {
  patron: [
    {
      name: "Prof. Bhallamudi Ravi",
      title: "Director, National Institute of Technology Karnataka, Surathkal",
      image: raviImage,
    },
  ],
  chairman: [
    {
      name: "Prof. Darshak R. Trivedi",
      title: "Head, Department of Chemistry, NITK",
      image: darshakImage,
    },
  ],
  conveners: [
    {
      name: "Dr. Sib Sankar Mal",
      title: "Department of Chemistry, NITK",
      image: sibshankarImage,
    },
    {
      name: "Dr. Lakshmi Vellanki",
      title: "Department of Chemistry, NITK",
      image: lakshmiImage,
    },
  ],
  co_convenor: [
    {
      name: "Prof. Keyur Raval",
      title: "Professor-In-Charge, CRF, NITK",
      image: keyurImage,
    },
  ],
  organizingCommittee: [
    {
      name: "Prof. A. Nityananda Shetty",
      title: "Department of Chemistry, NITK",
      image: nityanadImage,
    },
    {
      name: "Prof. B. Ramachandra Bhat",
      title: "Department of Chemistry, NITK",
      image: ramchandraImage,
    },
    {
      name: "Prof. D. Krishna Bhat",
      title: "Department of Chemistry, NITK",
      image: krishnaImage,
    },
    {
      name: "Prof. Udayakumar Dalimba",
      title: "Department of Chemistry, NITK",
      image: udayImage,
    },
    {
      name: "Dr. Beneesh P. B.",
      title: "Department of Chemistry, NITK",
      image: beneeshImage,
    },
    {
      name: "Dr. Debashree Chakraborty",
      title: "Department of Chemistry, NITK",
      image: debashreeImage,
    },
    {
      name: "Dr. Saikat Dutta",
      title: "Department of Chemistry, NITK",
      image: saikatImage,
    },
    {
      name: "Dr. Vijayendra Shetti",
      title: "Department of Chemistry, NITK",
      image: vijayendraImage,
    },
  ],
  advisoryCommittee: [
    {
      name: "Prof. Dwarakish G S",
      title: "Dean (Academic), NITK",
      image: dwarkishImage,
    },
    {
      name: "Prof. Udaya Bhat K",
      title: "Dean (Research & Consultancy), NITK",
      image: udayBhatImage,
    },
    {
      name: "Prof. Gangadharan K V",
      title: "Dean (Planning & Development), NITK",
      image: gangadharanImage,
    },
    {
      name: "Prof. T. Laxminidhi",
      title: "Dean (Faculty Welfare), NITK",
      image: laxminidhiImage,
    },
    {
      name: "Prof. A. Chitharanjan Hegde",
      title: "Dean (Students Welfare), NITK",
      image: acHegdeImage,
    },
    {
      name: "Prof. Prasanna Belur D",
      title: "Dean (Alumni and Corporate Relations)",
      image: prasanaImage,
    },
  ],
  secretary: [
    {
      name: "Prof. Arun M. Isloor",
      title: "Department of Chemistry, NITK",
      image: arunImage,
    },
  ],
};

const MemberCard = ({ member, index, inView, isLeadership }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardClass = isLeadership
    ? "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group w-96"
    : "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cardClass}
    >
      {member.image && (
        <div className="p-6 flex justify-center">
          <div
            className={`${
              isLeadership ? "w-64 h-64" : "w-48 h-48"
            } overflow-hidden relative rounded-lg`}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
            <img
              src={imageError ? dummyMember : member.image}
              alt={member.name}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ${
                !imageLoaded ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      )}
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300 text-center">
          {member.name}
        </h3>
        <p className="text-blue-600 font-medium text-center">{member.title}</p>
      </div>
    </motion.div>
  );
};

const CommitteeSection = ({ title, members }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLeadership =
    title === "Patron" ||
    title === "Chairman" ||
    title === "Secretary" ||
    title === "Conveners" ||
    title === "Co-Convener";
  const gridClass = isLeadership
    ? "flex justify-center space-x-8"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <motion.div
      ref={ref}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">
        {title}
      </h3>
      <div className={gridClass}>
        {members.map((member, index) => (
          <MemberCard
            key={member.name}
            member={member}
            index={index}
            inView={inView}
            isLeadership={isLeadership}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Committee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="committee">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Conference Committee
          </h2>
          <p className="text-xl text-gray-600">
            Meet our distinguished committee members
          </p>
        </motion.div>

        <CommitteeSection title="Patron" members={committeeData.patron} />
        <CommitteeSection title="Chairman" members={committeeData.chairman} />
        <CommitteeSection title="Conveners" members={committeeData.conveners} />
        <CommitteeSection
          title="Co-Convener"
          members={committeeData.co_convenor}
        />
        <CommitteeSection
          title="Advisory Board"
          members={committeeData.advisoryCommittee}
        />
        <CommitteeSection
          title="Organizing Committee"
          members={committeeData.organizingCommittee}
        />
        <CommitteeSection title="Secretary" members={committeeData.secretary} />
      </div>
    </section>
  );
};

export default Committee;
