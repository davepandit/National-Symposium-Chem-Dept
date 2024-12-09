import React from 'react';
import { motion } from 'framer-motion';

const committeeData = {
  patron: [
    { name: 'Prof. B. Ravi', title: 'Director, National Institute of Technology Karnataka, Surathkal' }
  ],
  chairman: [
    { name: 'Prof. I. Regupathi', title: 'Head of the Department, Chemical Engineering' }
  ],
  conveners: [
    { name: 'Dr. Chinta Sankar Rao', title: 'Chemical Engineering' },
    { name: 'Dr. Vaishakh Nair', title: 'Chemical Engineering' },
    { name: 'Dr. Ranjeet Kumar Sahu', title: 'Mechanical Engineering' },
    { name: 'Dr. Anupama Surenjan', title: 'Civil Engineering' },
    { name: 'Dr. Nikhil K S', title: 'Electronics and Communication Engg.' },
    { name: 'Dr. Sourav Kanti Addya', title: 'Computer Science & Engg.' },
    { name: 'Dr. Lipak Sahoo', title: 'Metallurgical and Materials Engg.' }
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
        <CommitteeSection title="Conveners" members={committeeData.conveners} />
      </div>
    </section>
  );
};

export default Committee;