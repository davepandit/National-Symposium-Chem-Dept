import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import beach_heaven from "../img/beach_hotel.webp";
import skanda_hotel from "../img/skanda_hotel.webp";
import royal_hotel from "../img/royal_hotel.webp";
import staymaker_hotel from "../img/staymaker_hotel.webp";

const stays = [
  {
    name: "Beach Heaven",
    image: beach_heaven,
    link: "https://www.agoda.com/beach-heaven/hotel/suratakal-in.html?ds=stJnAl8%2FV4PzfusU",
    description:
      "Conveniently situated in the Mukka part of Suratakal, this property puts you close to attractions and interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy of your stay.",
  },
  {
    name: "Skanda Comforts",
    image: skanda_hotel,
    link: "https://www.agoda.com/skanda-comforts/hotel/mangalore-in.html?ds=aIFKzkx%2B1SNiHiqK",
    description:
      "Conveniently situated in the Suratakal part of Suratakal, this property puts you close to attractions and interesting dining options.",
  },
  {
    name: "Royal Inn Lodging",
    image: royal_hotel,
    link: "https://www.agoda.com/royal-inn-lodging/hotel/suratakal-in.html?ds=WR%2BjfB3NR8Fs8cgY",
    description:
      "Conveniently situated in the Mukka part of Suratakal, this property puts you close to attractions and interesting dining options. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.",
  },
  {
    name: "Hotel Shantala",
    image: staymaker_hotel,
    link: "https://www.agoda.com/staymaker-hotel-shantala-1-km-from-beach/hotel/suratakal-in.html?ds=y3Y2s4MMr6gcRS4Z",
    description:
      "Conveniently situated in the Suratakal part of Suratakal, this property puts you close to attractions and interesting dining options.",
  },
];

const Hotels = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const redirectToHotelPage = (link) => {
    window.open(link);
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="accommodation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nearby Hotels
          </h2>
          <p className="text-xl text-gray-600">
            Here are some nearby hotels for your convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stays.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer"
              onClick={() => redirectToHotelPage(hotel.link)}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-600">{hotel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
