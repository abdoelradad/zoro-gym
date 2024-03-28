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
      <SwiperSlide className="h-full flex justify-end pt-32">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] gap-5 md:gap-10">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className=" text-4xl md:text-5xl xl:text-6xl text-white text-center lg:text-right mb-2"
          >
            مستعد لبداية جديدة للوصول للجسم المثالى مع أفضل المدربيين!
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white text-xl text-center lg:text-right mb-4"
          >
            جهز نفسك وانضم لالاف الشباب في أقوى وامتع مغامرة هتعشيها مع برنامج
            تدريبي شامل هيساعدك توصل لافضل نسخة منك تحت إشراف فريق كامل من
            الأطباء المتخصصين.
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
