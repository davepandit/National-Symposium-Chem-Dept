import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import acHegdeImage from '../committee/A_C_Hegde.jpg';
import ashviniImage from '../committee/Ashvini Chaturvedi.jpg';
import perumalImage from '../committee/B Venkatesa Perumal.jpg';
import raviImage from '../committee/B. Ravi.jpg';
import bablooImage from '../committee/Babloo Chaudhary.jpg';
import csraoImage from '../committee/Chinta Sankar Rao.jpg';
import anupamaImage from '../committee/Dr. Anupama Surenjan.jpg';
import basavarajuImage from '../committee/Dr. Basavaraju Manu.jpg';
import dwarakishImage from '../committee/Dwarakish G S.jpg';
import hariImage from '../committee/Hari Prasad Dasari.jpg';
import harshaImage from '../committee/Harsha Vardhan.jpg';
import regupathiImage from '../committee/I. Regupathi.jpeg';
import gangadharanImage from '../committee/K V Gangadharan.jpg';
import keyurImage from '../committee/keyur.jpeg';
import kumkumImage from '../committee/Kumkum Banerjee.jpg';
import lipakImage from '../committee/Lipak Sahoo.jpeg';
import manuImage from '../committee/manu-basavaraju.jpg';
import mohitImage from '../committee/mohit-p-tahiliani.jpg';
import murigendrappImage from '../committee/Murigendrappa .jpg';
import nikhilImage from '../committee/Nikhil K S.png';
import pruthvirajImage from '../committee/Pruthviraj U..jpeg';
import ramImage from '../committee/Ram Mohana Reddy Guddeti.png';
import sahuImage from '../committee/Ranjeet Kumar Sahu.jpg';
import shreetanthaImage from '../committee/Shrikantha_S_Rao.jpg';
import shyamImage from '../committee/Shyam Lal.jpg';
import souravImage from '../committee/Sourav Kanti Addya.jpg';
import subhashImage from '../committee/subhas-yaragal.jpg';
import laxminidhiImage from '../committee/T. Laxminidhi.png';
import udayaImage from '../committee/Uday_Bhat.jpg';
import vaishakhImage from '../committee/Vaishakh Nair.jpg';
import vidyaImage from '../committee/Vidya Shetty.png';

const dummyMember = 'https://via.placeholder.com/200x200?text=Member';

const committeeData = {
  patron: [
    { 
      name: 'Prof. Bhallamudi Ravi', 
      title: 'Director, National Institute of Technology Karnataka, Surathkal',
      image: raviImage
    }
  ],
  chairman: [
    { 
      name: 'Prof. Darshak R. Trivedi', 
      title: 'Head, Department of Chemistry, NITK',
      image: null
    }
  ],
  conveners: [
    {
      name: 'Dr. Sib Sankar Mal',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Dr. Lakshmi Vellanki',
      title: 'Department of Chemistry, NITK',
      image: null
      }
  ],
  organizingCommittee: [
    {
      name: 'Prof. A. Nityananda Shetty',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Prof. B. Ramachandra Bhat',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Prof. D. Krishna Bhat',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Prof. Udayakumar Dalimba',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Dr. Beneesh P. B.',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Dr. Debashree Chakraborty',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Dr. Saikat Dutta',
      title: 'Department of Chemistry, NITK',
      image: null
      },
      {
      name: 'Dr. Vijayendra Shetti',
      title: 'Department of Chemistry, NITK',
      image: null
      }
  ],
  advisoryCommittee: [
    {
      name: 'Prof. Dwarakish G S',
      title: 'Dean (Academic), NITK',
      image: null
      },
      {
      name: 'Prof. Udaya Bhat K',
      title: 'Dean (Research & Consultancy), NITK',
      image: null
      },
      {
      name: 'Prof. Gangadharan K V',
      title: 'Dean (Planning & Development), NITK',
      image: null
      },
      {
      name: 'Prof. T. Laxminidhi',
      title: 'Dean (Faculty Welfare), NITK',
      image: null
      },
      {
      name: 'Prof. A. Chitharanjan Hegde',
      title: 'Dean (Students Welfare), NITK',
      image: null
      },
      {
      name: 'Prof. Keyur Raval',
      title: 'Professor-In-Charge, CRF, NITK',
      image: null
      }
  ],
  secretary: [
    { name: 'Prof. Arun M. Isloor', title: 'Department of Chemistry, NITK' },
    
  ]
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
          <div className={`${isLeadership ? 'w-64 h-64' : 'w-48 h-48'} overflow-hidden relative rounded-lg`}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
            <img
              src={imageError ? dummyMember : member.image}
              alt={member.name}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ${
                !imageLoaded ? 'opacity-0' : 'opacity-100'
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
    threshold: 0.1
  });

  const isLeadership = title === "Patron" || title === "Chairman" || title === "Secretary";
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
      <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">{title}</h3>
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
    threshold: 0.1
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Conference Committee</h2>
          <p className="text-xl text-gray-600">
            Meet our distinguished committee members
          </p>
        </motion.div>

        <CommitteeSection title="Patron" members={committeeData.patron} />
        <CommitteeSection title="Chairman" members={committeeData.chairman} />
        <CommitteeSection title="Conveners" members={committeeData.conveners} />
        <CommitteeSection title="Advisory Board" members={committeeData.advisoryCommittee} />
        <CommitteeSection title="Organizing Committee" members={committeeData.organizingCommittee} />
        <CommitteeSection title="Secretary" members={committeeData.secretary} />
      </div>
    </section>
  );
};

export default Committee;