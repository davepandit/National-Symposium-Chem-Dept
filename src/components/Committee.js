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
      name: 'Prof. B. Ravi', 
      title: 'Director, National Institute of Technology Karnataka, Surathkal',
      image: raviImage
    }
  ],
  chairman: [
    { 
      name: 'Prof. I. Regupathi', 
      title: 'Head of the Department, Chemical Engineering',
      image: regupathiImage
    }
  ],
  conveners: [
    { 
      name: 'Dr. Chinta Sankar Rao', 
      title: 'Chemical Engineering, NITK Surathkal',
      image: csraoImage
    },
    { 
      name: 'Dr. Vaishakh Nair', 
      title: 'Chemical Engineering, NITK Surathkal',
      image: vaishakhImage
    },
    { 
      name: 'Dr. Ranjeet Kumar Sahu', 
      title: 'Mechanical Engineering, NITK Surathkal',
      image: sahuImage
    },
    { 
      name: 'Dr. Anupama Surenjan', 
      title: 'Civil Engineering, NITK Surathkal',
      image: anupamaImage
    },
    { 
      name: 'Dr. Nikhil K S', 
      title: 'Electronics and Communication Engg., NITK Surathkal',
      image: nikhilImage
    },
    { 
      name: 'Dr. Sourav Kanti Addya', 
      title: 'Computer Science & Engg., NITK Surathkal',
      image: souravImage
    },
    { 
      name: 'Dr. Lipak Sahoo', 
      title: 'Metallurgical and Materials Engg., NITK Surathkal',
      image: lipakImage
    }
  ],
  steeringCommittee: [
    {
      name: 'Prof. Basavaraju Manu',
      title: 'Civil Engg., NITK Surathkal',
      image: basavarajuImage
    },
    {
      name: 'Prof. S. M. Murigendrappa',
      title: 'Mechanical Engg., NITK Surathkal',
      image: murigendrappImage
    },
    {
      name: 'Prof. Kumkum Banerjee',
      title: 'MM Engg., NITK Surathkal',
      image: kumkumImage
    },
    {
      name: 'Prof. Harsha Vardhan',
      title: 'Mining Engg., NITK Surathkal',
      image: harshaImage
    },
    {
      name: 'Dr. Manu Basavaraju',
      title: 'CSE, NITK Surathkal',
      image: manuImage
    },
    {
      name: 'Prof. Ashvini Chaturvedi',
      title: 'PIC - CE, NITK Surathkal',
      image: ashviniImage
    },
    {
      name: 'Prof. Keyur Raval',
      title: 'PIC - CRF, NITK Surathkal',
      image: keyurImage
    },
    {
      name: 'Prof. Vidya Shetty',
      title: 'Chemical Engg., NITK Surathkal',
      image: vidyaImage
    },
    {
      name: 'Prof. Hari Prasad Dasari',
      title: 'Chemical Engg., NITK Surathkal',
      image: hariImage
    },
    {
      name: 'Prof. Ram Mohana Reddy Guddeti',
      title: 'IT, NITK Surathkal',
      image: ramImage
    },
    {
      name: 'Prof. B Venkatesa Perumal',
      title: 'EEE, NITK Surathkal',
      image: perumalImage
    },
    {
      name: 'Dr. Shyam Lal',
      title: 'E&C Engg., NITK Surathkal',
      image: shyamImage
    },
    {
      name: 'Dr. Mohit P. Tahiliani',
      title: 'CSE, NITK Surathkal',
      image: mohitImage
    },
    {
      name: 'Dr. Pruthviraj U.',
      title: 'WROE, NITK Surathkal',
      image: pruthvirajImage
    },
    {
      name: 'Dr. Babloo Chaudhary',
      title: 'Civil Engg., NITK Surathkal',
      image: bablooImage
    }
  ],
  advisoryCommittee: [
    {
      name: 'Prof. Subhash C. Yaragal',
      title: 'Deputy Director',
      image: subhashImage
    },
    {
      name: 'Prof. Udaya Bhat',
      title: 'Dean (R&C)',
      image: udayaImage
    },
    {
      name: 'Prof. Dwarakish G S',
      title: 'Dean (Academics)',
      image: dwarakishImage
    },
    {
      name: 'Prof. Gangadharan K V',
      title: 'Dean (P&D)',
      image: gangadharanImage
    },
    {
      name: 'Prof. T. Laxminidhi',
      title: 'Dean (FW)',
      image: laxminidhiImage
    },
    {
      name: 'Prof. A Chitharanjan Hegde',
      title: 'Dean (SW)',
      image: acHegdeImage
    },
    {
      name: 'Prof. Shrikantha S. Rao',
      title: 'Dean (ACR)',
      image: shreetanthaImage
    }
  ],
  nationalAdvisoryCommittee: [
    { name: 'Prof. Tanmay Basak', title: 'IIT Madras' },
    { name: 'Prof. R. Vinu', title: 'IIT Madras' },
    { name: 'Prof. B. C. Meikap', title: 'IIT Kharagpur' },
    { name: 'Prof. V. Sivasubramanian', title: 'NIT Calicut' },
    { name: 'Prof. Uday Bhaskar Babu', title: 'NIT Warangal' },
    { name: 'Prof. Soumya K Ghosh', title: 'IIT Kharagpur' },
    { name: 'Prof. Viswanathan N. Nurni', title: 'IIT Bombay' },
    { name: 'Dr. Abhilash', title: 'CSIR-NML Jamshedpur' },
    { name: 'Dr. Dipin S. Pillai', title: 'IIT Kanpur' },
    { name: 'Dr. Deepak Kumar Ojha', title: 'IIT Roorkee' },
    { name: 'Dr. Hemanth Kumar Tanneru', title: 'IIPE Vishakhapatnam' }
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300 text-center">
          {member.name}
        </h3>
        <p className="text-green-600 font-medium text-center">{member.title}</p>
      </div>
    </motion.div>
  );
};

const CommitteeSection = ({ title, members }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isLeadership = title === "Patron" || title === "Chairman";
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
      <h3 className="text-2xl font-bold mb-8 text-green-700 text-center">{title}</h3>
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
        <CommitteeSection title="Advisory Committee" members={committeeData.advisoryCommittee} />
        <CommitteeSection title="Steering Committee" members={committeeData.steeringCommittee} />
        <CommitteeSection title="National Advisory Committee" members={committeeData.nationalAdvisoryCommittee} />
      </div>
    </section>
  );
};

export default Committee;