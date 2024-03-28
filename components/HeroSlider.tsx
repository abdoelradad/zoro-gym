"use client";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Link } from "react-scroll";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-24">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] gap-5 md:gap-8">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className=" text-4xl md:text-5xl xl:text-6xl text-white text-center lg:text-right mb-2"
          >
            بناء عضلاتك هي ليست أن تكون أفضل مما كنت عليه بمساعدة نخبة من
            المدربيين
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white text-xl text-center lg:text-right mb-4"
          >
            العوامل التي يحتاجها لاعب كمال الأجسام للإنتظام في هذه الرياضة
            فالعامل النفسي يلعب دورا مهما في نشاط وحماس وفعالية اللاعب خلال
            مسيرته في عآلم كمال الأجسام
          </motion.p>
        </div>
      </SwiperSlide>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center xl:text-right mt-2"
      >
        <CustomButton text="إشترك الأن" containerStyles="w-[196px] h-[62px]" />
      </motion.div>
    </Swiper>
  );
};

export default HeroSlider;
