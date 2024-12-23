import React from 'react';
import { motion } from 'framer-motion';

const hotels = [
  {
    name: 'Beach Heaven',
    image: 'https://r1imghtlak.mmtcdn.com/b6ee63daf20411ecbd730a58a9feac02.jpeg',
    description: 'Beachfront hotel with scenic views'
  },
  {
    name: 'Sai Suraj International Hotel',
    image: 'https://content3.jdmagicbox.com/comp/mangalore/dc/0824px824.x824.1233106751q6d3z9.dc/catalogue/sai-suraj-international-hotels-pvt-ltd-surathkal-mangalore-hotels-rs-1001-to-rs-2000--1khaqq6.jpg',
    description: 'Modern business hotel in the heart of the city'
  },
  {
    name: 'Ocean Pearl',
    image: 'https://images.trvl-media.com/lodging/43000000/42130000/42120700/42120647/136a8995.jpg',
    description: 'Luxury hotel with premium amenities'
  },
  {
    name: 'Ginger',
    image: 'https://content.jdmagicbox.com/comp/mangalore/l4/0824px824.x824.090328120039.f1l4/catalogue/ginger-hotel-kottara-chowki-mangalore-hotels-rs-1001-to-rs-2000--49ckhae-250.jpg',
    description: 'Contemporary budget-friendly accommodation'
  }
];

const Accommodation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Accommodation;
