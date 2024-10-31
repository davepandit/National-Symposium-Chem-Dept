import React from 'react';
import { motion } from 'framer-motion';

const committeeData = {
  patron: [
    { name: 'Prof. B. Ravi', title: 'Director, National Institute of Technology Karnataka, Surathkal' }
  ],
  chairman: [
    { name: 'Dr. I. Regupathi', title: 'Head of the Department, Chemical Engineering' }
  ],
  advisoryCommittee: [
    { name: 'Prof. Subhash C. Yaragal', title: 'Deputy Director' },
    { name: 'Prof. Udaya Bhat', title: 'Dean (R&C)' },
    { name: 'Prof. Dwarakish G S', title: 'Dean (Academics)' },
    { name: 'Prof. Gangadharan K V', title: 'Dean (P&D)' },
    { name: 'Prof. T. Laxminidhi', title: 'Dean (FW)' },
    { name: 'Dr. Basavaraju Manu', title: 'Civil Engg' },
    { name: 'Dr. S. M. Murigendrappa', title: 'Mechanical Engg' },
    { name: 'Dr. Kumkum Banerjee', title: 'MM Engg.' },
    { name: 'Dr. Harsha Vardhan', title: 'Mining Engg' },
    { name: 'Dr. Manu Basavaraju', title: 'CSE' },
    { name: 'Dr. Ashvini Chaturvedi', title: 'PIC - CE' },
    { name: 'Dr. Keyur Raval', title: 'PIC - CRF' },
    { name: 'Dr. Vidya Shetty', title: 'Chemical Engg.' },
    { name: 'Dr. Hari Prasad Dasari', title: 'Chemical Engg.' },
    { name:  'Dr. Shyam Lal', title: 'E&C Engg.' },
    { name: 'Dr. Mohit P. Tahiliani', title: 'CSE' },
    { name: 'Dr. Ram Mohana Reddy Guddeti', title: 'IT' },
    { name: 'Dr. B Venkatesa Perumal', title: 'EEE' },
    { name: 'Dr. Pruthviraj U.', title: 'WROE' },
    { name: 'Dr. Babloo Chaudhary', title: 'Civil Engg' },
  ],
  nationalAdvisoryCommittee: [
    { name: 'Prof. Tanmay Basak', title: 'IIT Madras' },
    { name: 'Prof. R. Vinu', title: 'IIT Madras' },
    { name: 'Prof. Rabibrata Mukherjee', title: 'IIT Kharagpur' },
    { name: 'Prof. B. C. Meikap', title: 'IIT Kharagpur' },
    { name: 'Prof. Goutam Deo', title: 'IIT Kanpur' },
    { name: 'Prof. G. Pugazhenthi', title: 'IIT Guwahati' },
    { name: 'Prof. Parag Arvind Deshpande', title: 'IIT Jodhpur' },
    { name: 'Prof. Prabir Kumar Saha', title: 'IIT Guwahati' },
    { name: 'Prof. V. Sivasubramanian', title: 'NIT Calicut' },
    { name: 'Prof. Uday Bhaskar Babu', title: 'NIT Warangal' },
  ],
  conveners: [
    { name: 'Dr. Chinta Sankar Rao', title: 'Chemical Engineering' },
    { name: 'Dr. Vaishakh Nair', title: 'Chemical Engineering' },
    { name: 'Dr. Ranjeet Kumar Sahu', title: 'Mechanical Engineering' },
    { name: 'Dr. Anupama Surenjan', title: 'Civil Engineering' },
    { name: 'Dr. Nikhil K S', title: 'Electronics and Communication Engg.' },
    { name: 'Dr. Sourav Kanti Addya', title: 'Computer Science & Engg.' },
    { name: 'Dr. Lipak Sahoo', title: 'Metallurgical and Materials Engg.' },
  ]
};

const CommitteeSection = ({ title, members }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-4 text-green-700">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h4 className="font-semibold text-gray-800">{member.name}</h4>
          <p className="text-sm text-gray-600">{member.title}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Committee = () => {
  return (
    <section className="py-24 bg-green-50" id="committee">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Conference Committee</h2>
        <CommitteeSection title="Patron" members={committeeData.patron} />
        <CommitteeSection title="Chairman" members={committeeData.chairman} />
        <CommitteeSection title="Advisory Committee" members={committeeData.advisoryCommittee} />
        <CommitteeSection title="National Advisory Committee" members={committeeData.nationalAdvisoryCommittee} />
        <CommitteeSection title="Conveners" members={committeeData.conveners} />
      </div>
    </section>
  );
};

export default Committee;