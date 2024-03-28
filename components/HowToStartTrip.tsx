"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { FaBriefcase } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { useRef } from "react";

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 24,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 331,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 6,
    icon: IoMdHome,
    text: "number of branches",
  },
];

const HowToStartTrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="bg-blue-50 pt-16 pb-16 hidden md:block  ">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-16"
        >
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center select-none border-b-2 border-accent/30 md:border-none"
              >
                {/* circle outer */}
                <div className="border-[3px] bg-accent/10 border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6 relative">
                  {/* circle inner & count number */}
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full text-accent"
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                {/* text */}
                <div className="flex flex-col justify-center items-center text-center">
                  <item.icon
                    className="text-5xl mb-2 text-accent/90  bg-primary-200 p-2 rounded-full 
                  border-[3px] border-accent"
                  />
                  <h4 className="h4 text-accent capitalize mb-10">
                    {item.text}
                  </h4>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStartTrip;
