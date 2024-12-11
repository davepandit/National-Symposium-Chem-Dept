import React from 'react';
import { motion } from 'framer-motion';

const committeeData = {
  patron: [
    { 
      name: 'Prof. B. Ravi', 
      title: 'Director, National Institute of Technology Karnataka, Surathkal',
      image: 'https://www.nitk.ac.in/images/pictures/5509/content/Dir_Passport_size_photo.jpg'
    }
  ],
  chairman: [
    { 
      name: 'Prof. I. Regupathi', 
      title: 'Head of the Department, Chemical Engineering',
      image: 'https://chemical.nitk.ac.in/sites/default/files/regupathi.JPG'
    }
  ],
  conveners: [
    { 
      name: 'Dr. Chinta Sankar Rao', 
      title: 'Chemical Engineering',
      image: 'https://chemical.nitk.ac.in/sites/default/files/CSRao_2.jpg'
    },
    { 
      name: 'Dr. Vaishakh Nair', 
      title: 'Chemical Engineering',
      image: 'https://chemical.nitk.ac.in/sites/default/files/Vaishakh_nair_0.jpg'
    },
    { 
      name: 'Dr. Ranjeet Kumar Sahu', 
      title: 'Mechanical Engineering',
      image: 'https://mech.nitk.ac.in/sites/default/files/Sahu.jpg'
    },
    { 
      name: 'Dr. Anupama Surenjan', 
      title: 'Civil Engineering',
      image: 'https://civil.nitk.ac.in/sites/default/files/Anupama%20Surenjan%20medium.jpg'
    },
    { 
      name: 'Dr. Nikhil K S', 
      title: 'Electronics and Communication Engg.',
      image: 'https://ece.nitk.ac.in/sites/default/files/Untitled1.png'
    },
    { 
      name: 'Dr. Sourav Kanti Addya', 
      title: 'Computer Science & Engg.',
      image: 'https://cse.nitk.ac.in/sites/default/files/saurav.jpg'
    },
    { 
      name: 'Dr. Lipak Sahoo', 
      title: 'Metallurgical and Materials Engg.',
      image: 'https://mme.nitk.ac.in/sites/default/files/SAN_8059_40pct.JPG'
    }
  ],
  steeringCommittee: [
    {
      name: 'Prof. Basavaraju Manu',
      title: 'Civil Engg',
      image: 'https://civil.nitk.ac.in/sites/default/files/Dr.%20Basavaraju%20Manu%20Medium.jpg'
    },
    {
      name: 'Prof. S. M. Murigendrappa',
      title: 'Mechanical Engg',
      image: 'https://mech.nitk.ac.in/sites/default/files/Murigendrappa%20%282%29.jpg'
    },
    {
      name: 'Prof. Kumkum Banerjee',
      title: 'MM Engg.',
      image: 'https://mme.nitk.ac.in/sites/default/files/KB_0.jpg'
    },
    {
      name: 'Prof. Harsha Vardhan',
      title: 'Mining Engg',
      image: 'https://mining.nitk.ac.in/sites/default/files/HV_2.jpg'
    },
    {
      name: 'Dr. Manu Basavaraju',
      title: 'CSE',
      image: 'https://cse.nitk.ac.in/sites/default/files/dr-manu-basavaraju.jpg'
    },
    {
      name: 'Prof. Ashvini Chaturvedi',
      title: 'PIC - CE',
      image: 'https://ece.nitk.ac.in/sites/default/files/ashvini1_0.jpg'
    },
    {
      name: 'Prof. Keyur Raval',
      title: 'PIC - CRF',
      image: 'https://chemical.nitk.ac.in/sites/default/files/keyur.JPG'
    },
    {
      name: 'Prof. Vidya Shetty',
      title: 'Chemical Engg.',
      image: 'https://chemical.nitk.ac.in/sites/default/files/CV%20pics.png'
    },
    {
      name: 'Prof. Hari Prasad Dasari',
      title: 'Chemical Engg.',
      image: 'https://chemical.nitk.ac.in/sites/default/files/field/image/original_Hari%20Prasad%20Dasari.jpg'
    },
    {
      name: 'Prof. Ram Mohana Reddy Guddeti',
      title: 'IT',
      image: 'https://infotech.nitk.ac.in/sites/default/files/grm-2024-image.png'
    },
    {
      name: 'Prof. B Venkatesa Perumal',
      title: 'EEE',
      image: 'https://eee.nitk.ac.in/sites/default/files/Dr.BVPerumal_0.jpg'
    },
    {
      name: 'Dr. Shyam Lal',
      title: 'E&C Engg.',
      image: 'https://ece.nitk.ac.in/sites/default/files/big.jpg'
    },
    {
      name: 'Dr. Mohit P. Tahiliani',
      title: 'CSE',
      image: 'https://cse.nitk.ac.in/sites/default/files/mohit-p-tahiliani.jpg'
    },
    {
      name: 'Dr. Pruthviraj U.',
      title: 'WROE',
      image: 'https://appmech.nitk.ac.in/sites/default/files/Copy%20of%20PU.JPG'
    },
    {
      name: 'Dr. Babloo Chaudhary',
      title: 'Civil Engg',
      image: 'https://civil.nitk.ac.in/sites/default/files/Babloo%20pic_4.jpg'
    }
  ],
  advisoryCommittee: [
    {
      name: 'Prof. Subhash C. Yaragal',
      title: 'Deputy Director',
      image: 'https://civil.nitk.ac.in/sites/default/files/subhas-yaragal-image.jpg'
    },
    {
      name: 'Prof. Udaya Bhat',
      title: 'Dean (R&C)',
      image: 'https://www.nitk.ac.in/images/pictures/6924/content/Uday_Bhat.jpg'
    },
    {
      name: 'Prof. Dwarakish G S',
      title: 'Dean (Academics)',
      image: 'https://www.nitk.ac.in/images/pictures/6199/content/IMG-20231110-WA0016.jpg'
    },
    {
      name: 'Prof. Gangadharan K V',
      title: 'Dean (P&D)',
      image: 'https://mech.nitk.ac.in/sites/default/files/K%20V%20Gangadharan_Medium.jpg'
    },
    {
      name: 'Prof. T. Laxminidhi',
      title: 'Dean (FW)',
      image: 'https://ece.nitk.ac.in/sites/default/files/tln-d.png'
    },
    {
      name: 'Prof. A Chitharanjan Hegde',
      title: 'Dean (SW)',
      image: 'https://www.nitk.ac.in/images/pictures/6255/content/A_C_Hegde.jpg'
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
    { name: 'Dr. Abhilash', title: 'CSIR-NML Jamshedpur' }
  ]
};

const CommitteeMemberImage = ({ src, alt }) => {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
      <img
        src={error ? 'https://via.placeholder.com/200x200?text=Image+Not+Available' : src}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
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
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 text-center"
          whileHover={{ scale: 1.05 }}
        >
          {member.image && <CommitteeMemberImage src={member.image} alt={member.name} />}
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
        <CommitteeSection title="Advisory Committee" members={committeeData.advisoryCommittee} />
        <CommitteeSection title="Steering Committee" members={committeeData.steeringCommittee} />
        <CommitteeSection title="National Advisory Committee" members={committeeData.nationalAdvisoryCommittee} />
      </div>
    </section>
  );
};

export default Committee;