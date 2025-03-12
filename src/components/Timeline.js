import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  { date: "20/2/2025", event: "Registration Start date" },
  { date: "15/04/2025", event: "Deadline for Abstract Submission" },
  { date: "20/04/2025", event: "Abstract Acceptance Notification" },
  { date: "5/05/2025", event: "Registration End Date" },
];

const TimelineItem = ({ event, index, isLeft }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      className={`mb-16 flex w-full ${
        isLeft ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col items-center`}
      initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 100 : -100 }
      }
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div
        className={`md:w-1/2 w-full ${
          isLeft ? "md:pl-8" : "md:pr-8"
        } px-4 flex ${
          isLeft ? "md:justify-start" : "md:justify-end"
        } justify-center`}
      >
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 max-w-md hover:bg-blue-50 transition-all duration-300 border border-blue-200 backdrop-blur-sm w-full md:w-auto"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to bottom right, #d5e6f7, #cae2fa)",
          }}
        >
          <div className="md:block flex items-start gap-4">
            <motion.div
              className="flex-shrink-0 flex md:hidden items-center justify-center bg-gradient-to-br from-blue-300 to-blue-500 w-12 h-12 rounded-full shadow-xl mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                background:
                  "linear-gradient(to bottom right, #15803d, #166534)",
              }}
            >
              <span className="text-white font-bold text-lg">{index + 1}</span>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.event}
              </h3>
              <p className="text-blue-600 font-semibold flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.date}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center w-8 relative my-4 md:my-0">
        <div className="h-full w-1 bg-gradient-to-b from-blue-300 to-blue-500"></div>
        <motion.div
          className="absolute top-0 z-10 md:flex hidden items-center justify-center bg-gradient-to-br from-blue-300 to-blue-500 w-12 h-12 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            background: "linear-gradient(to bottom right, #4ea4f1, #00a9ff)",
          }}
        >
          <span className="text-white font-bold text-lg">{index + 1}</span>
        </motion.div>
      </div>

      <div className="md:w-1/2 w-full"></div>
    </motion.div>
  );
};

const Timeline = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-blue-50"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Important Dates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Mark your calendar for these key dates to ensure you don't miss any
            important deadlines.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -ml-[2px] w-1 bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
