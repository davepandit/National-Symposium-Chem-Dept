import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tanmayBasak from "../img/tanmay basak.jpeg";
import pradeepNair from "../img/Predeep R Nair.jpeg";
import rVinu from "../img/r vinu.jpeg";
import pcAbhilash from "../img/Purushothaman C. Abhilash.jpeg";
import nikhilDhawan from "../img/nikhil dhawan.jpeg";
import manojSamuel from "../img/manoj p samuel.jpeg";
import chennaRao from "../img/chenna rao.jpeg";
import venkata from "../img/Venkata Vanukuru.jpeg";
import tcsmGupta from "../img/TCSM Gupta.jpeg";
import somashekhar from "../img/Somashekhar.jpeg";
import padmanandImage from "../committee/Padmanand Warrier.jpeg";
import dilip from "../img/Dilip.jpeg";
import chief_guest from "../img/chief_guest.jpeg";
import one from "../img/1st.png";
import two from "../img/2nd.png";
import three from "../img/3rd.png";
import four from "../img/4th.png";
import six from "../img/6th.png";
import seven from "../img/7th.png";
import eight from "../img/8th.png";
import ten from "../img/10th.png";
import eleven from "../img/11th.png";
import twelve from "../img/12th.png";
import thirteen from "../img/13th.png";
import fourteen from "../img/14th.png";
import fifteen from "../img/15th.png";
import sixteen from "../img/16th.png";
import seventeen from "../img/17th.png";
import eighteen from "../img/18th.png";
import nineteen from "../img/19th.png";
import twenty from "../img/20th.jpg";

const dummySpeaker = "https://via.placeholder.com/200x200?text=Speaker";

const chiefGuest = {
    name: "Dr. Kannan Srinivasan",
    title: "Director, CSIR-CSMCRI Bhavnagar",
    image: one,
};

const guestOfHonor = {
    name: "Ajay Mehta",
    title: "Vice President Engineering Technology at Shell",
    image: chief_guest,
};

const speakers = [
  {
    name: "Prof. M. Ravikanth",
    title: "Indian Institute of Technology Bombay",
    image: two,
  },
  {
    name: "Prof. Pratap Vishnoi",
    title: "JNCASR Bengaluru",
    image: three,
  },
  {
    name: "Prof. Tarun K. Panda",
    title: "Indian Institute of Technology Hyderabad",
    image: four,
  },
    {
    name: "Prof. Ramaswamy Murugavel",
    title: "Indian Institute of Technology Bombay",
    image: twenty,
  },
  {
    name: "Dr. M. Rajeswara Rao",
    title: "Indian Institute of Technology Dharwad",
    image: eight,
  },
  {
    name: "Dr. Debaprasad Shee",
    title: "Indian Institute of Technology Hyderabad",
    image: eleven,
  },
  {
    name: "Dr. Animikh Roy",
    title: "Father Muller Medical College Mangalore",
    image: "",
  },
  {
    name: "Dr. Chinna Ayya Swamy P.",
    title: "National Institute of Technology Calicut",
    image: ten,
  },
  {
    name: "Prof. Manja Naik",
    title: "College of Fisheries Mangalore",
    image: seven,
  },
  {
    name: "Dr. Hussain B.",
    title: "IISER Tirupathi",
    image: thirteen,
  },
  {
    name: "Dr. Debaprasad Mandal",
    title: "Indian Institute of Technology Ropar",
    image: sixteen,
  },
  {
    name: "Dr. Chandan Maity",
    title: "Vellore Institute of Technology",
    image: twelve,
  },
  {
    name: "Dr. Manash Sarmah",
    title: "Syngene International Ltd Bangalore",
    image: fourteen,
  },
  {
    name: "Dr. Kathiresan Murugavel",
    title: "CSIR-CECRI",
    image: seventeen,
  },
  {
    name: "Dr. Jince Sebastian",
    title: "Süd-Chemie India Pvt. Ltd.",
    image: eighteen,
  },
  {
    name: "Dr. Mallikarjun Angadi",
    title: "Librarian, Central Library, NITK",
    image: nineteen,
  },

].filter((speaker) => speaker.name !== "Prof. Sanjeev Chaudhari");

const SpeakerCard = ({ speaker, index, inView }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="p-6 flex justify-center">
        <div className="w-48 h-48 overflow-hidden relative rounded-lg">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <img
            src={imageError ? dummySpeaker : speaker.image}
            alt={speaker.name}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ${
              !imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {speaker.name}
        </h3>
        <p className="text-blue-500 font-medium">{speaker.title}</p>
      </div>
    </motion.div>
  );
};

const Speakers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Event Dignitaries</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-x-16 mb-20">
          {/* Chief Guest Block */}
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Chief Guest</h3>
            <SpeakerCard
              key={chiefGuest.name}
              speaker={chiefGuest}
              index={1}
              inView={inView}
            />
          </div>
        
          {/* Guest of Honor Block */}
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Guest of Honor</h3>
            <SpeakerCard
              key={guestOfHonor.name}
              speaker={guestOfHonor}
              index={2}
              inView={inView}
            />
          </div>
        </div>


        {/* list of speakers  */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            List of Speakers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
