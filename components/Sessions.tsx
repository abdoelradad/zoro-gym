import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import CustomButton from "./CustomButton";

const sessions = [
  {
    img: "/assets/img/sessions/session-1.webp",
    title: "Cardio",
  },
  {
    img: "/assets/img/sessions/session-2.webp",
    title: "Street Workout",
  },
  {
    img: "/assets/img/sessions/session-3.webp",
    title: "Spa & Massage",
  },
  {
    img: "/assets/img/sessions/session-4.webp",
    title: "Special Trainings",
  },
];

const Sessions = () => {
  return (
    <section className="pt-32 pb-32 bg-white">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          {sessions.map((sessionn, index) => {
            return (
              <div key={index} className="relative h-[350px] cursor-pointer">
                <Image
                  src={sessionn.img}
                  fetchPriority="low"
                  fill
                  alt="session img"
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
                <h4 className="h4 text-center uppercase py-2 text-white absolute top-0 px-10 left-0 bg-black/70 h-[40px] flex items-center justify-center">
                  {sessionn.title}
                </h4>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2>">
                  <CustomButton
                    text="Learn More"
                    containerStyles="w-[170px] h-[50px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
