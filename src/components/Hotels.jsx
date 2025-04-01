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
  {
    name: "Hotel Shree Krishna Palace",
    image:
      "https://r1imghtlak.mmtcdn.com/d46dec13-4c1c-4c92-87c9-04ac650ca092.jpeg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=480:336&crop=480:336",
    link: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=201410201906367634&_uCurrency=INR&checkin=05062025&checkout=05072025&city=CTIXE&country=IN&lat=12.9897&lng=74.80086&locusId=CTIXE&locusType=city&mmPoiTag=POI%7CNITK%20Lighthouse%7CPOI71050%7C13.0096346%7C74.7887421&modifyDates=true&rank=2&roomStayQualifier=2e0e&searchText=NITK%20Lighthouse%2C%20Mangalore&seoDS=true&seoReq=1743451128214&mtkeys=defaultMtkey",
    description:
      "The property is located at an accessible distance from Mangalore International Airport, Railway Station and Bus Stand.",
  },
  {
    name: "Gopi Residency",
    image:
      "https://r1imghtlak.mmtcdn.com/29595aa8-5cb9-4086-9bd2-ccd2a6fda67e.jpeg?&output-quality=75&downsize=520:350&crop=520:350;10,0&output-format=jpg&downsize=480:336&crop=480:336",
    link: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202406271642355206&_uCurrency=INR&checkin=05062025&checkout=05072025&city=CTIXE&country=IN&lat=12.99524&lng=74.80943&locusId=CTIXE&locusType=city&mmPoiTag=POI%7CNITK%20Lighthouse%7CPOI71050%7C13.0096346%7C74.7887421&modifyDates=true&rank=7&roomStayQualifier=2e0e&searchText=NITK%20Lighthouse%2C%20Mangalore&seoDS=true&seoReq=1743451128214&mtkeys=defaultMtkey",
    description:
      "Gopi Residency is Located in Surathkal and has AC as well has NON AC Rooms for guests.",
  },
  {
    name: "RK's Beach Front - Mangalore",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH22061251199170/QS1042/QS1042-Q1/4fd7edfd-1aef-455b-8b5a-466b07fc890f.jpeg",
    link: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202103230837305944&_uCurrency=INR&checkin=05062025&checkout=05072025&city=CTIXE&country=IN&lat=12.973&lng=74.79743&locusId=CTIXE&locusType=city&mmPoiTag=POI%7CNITK%20Lighthouse%7CPOI71050%7C13.0096346%7C74.7887421&modifyDates=true&rank=9&roomStayQualifier=2e0e&searchText=NITK%20Lighthouse%2C%20Mangalore&seoDS=true&seoReq=1743451128214&mtkeys=defaultMtkey",
    description:
      "Very good ambiance and we'll maintained room.. very friendly people, they can guide and make stay more comfortable.. if you want to stay near beach then I 100% recommend this.",
  },
  {
    name: "Hotel Sai Suraj International - Suratkal",
    image: "https://r1imghtlak.mmtcdn.com/6e4c29ea232211ea92520ac254d2bca4.jpg",
    link: "https://www.goibibo.com/hotels/sai-suraj-international-suratkal-hotel-in-mangalore-4867693050158772635/?hquery={%22ci%22:%2220250426%22,%22co%22:%2220250427%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=8122644638120735625&locusId=CTIXE&locusType=city&cityCode=CTIXE&locationData=poi|NITK%20Lighthouse$POI71050|L&mmtId=201411131430042956&city=Mangalore&sType=poi",
    description:
      "Located in Subhashitha Nagara, the hotel is close to Surathkal train station and beach.This relaxed hotel provides comfortable accommodation and a range of amenities for the guests' comfort.",
  },
  {
    name: "Suja Krishna Residency",
    image:
      "https://r1imghtlak.mmtcdn.com/74b58f30-540e-4021-8b22-6ed86e2c04d0.jpeg",
    link: "https://www.goibibo.com/hotels/suja-krishna-residency-hotel-in-mangalore-4236691319769864971/?hquery={%22ci%22:%2220250426%22,%22co%22:%2220250427%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=8122644638120735625&locusId=CTIXE&locusType=city&cityCode=CTIXE&locationData=poi|NITK%20Lighthouse$POI71050|L&mmtId=202403302202542095&city=Mangalore&sType=poi",
    description:
      "Our deluxe 4 bedroom suite offers spacious accommodation for families and groups. Despite being non air conditioned, the suite provides comfort with complimentary WiFi, flat-screen TVs",
  },
  {
    name: "Serenity stays",
    image:
      "https://r1imghtlak.mmtcdn.com/ec60987a-e1cd-4e51-927a-38879c21a64e.jpeg",
    link: "https://www.goibibo.com/hotels/serenity-stays-hotel-in-mangalore-6101870930223984537/?hquery={%22ci%22:%2220250426%22,%22co%22:%2220250427%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=8122644638120735625&locusId=CTIXE&locusType=city&cityCode=CTIXE&locationData=poi|NITK%20Lighthouse$POI71050|L&mmtId=202410161105061727&city=Mangalore&sType=poi",
    description: "Standard room with basic amenities and attached washroom.",
  },
  {
    name: "Saroja Villa by Monarch Stays",
    image:
      "https://r1imghtlak.mmtcdn.com/4a805d59-b8d5-4342-b960-cd9b1df369ee.JPG",
    link: "https://www.goibibo.com/hotels/saroja-villa-by-monarch-stays-hotel-in-mangalore-969552871382764454/?hquery={%22ci%22:%2220250426%22,%22co%22:%2220250427%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=8122644638120735625&locusId=CTIXE&locusType=city&cityCode=CTIXE&locationData=poi|NITK%20Lighthouse$POI71050|L&mmtId=202501151708053424&city=Mangalore&sType=poi",
    description:
      "This spacious and elegantly designed room features a minimalist aesthetic, blending comfort and functionality. The cozy double bed, adorned with crisp white linens and a rich green runner, invites you to unwind and relax.",
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
