"use client";
import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";

const success = [
  {
    img: "/assets/img/successStory/story-6.webp",
  },
  {
    img: "/assets/img/successStory/story-7.webp",
  },
  {
    img: "/assets/img/successStory/story-8.webp",
  },
  {
    img: "/assets/img/successStory/story-6.webp",
  },
  {
    img: "/assets/img/successStory/story-7.webp",
  },
  {
    img: "/assets/img/successStory/story-8.webp",
  },
  {
    img: "/assets/img/successStory/story-6.webp",
  },
  {
    img: "/assets/img/successStory/story-7.webp",
  },
  {
    img: "/assets/img/successStory/story-8.webp",
  },
];

const Success = () => {
  return (
    <section
      className="bg-black text-white pt-20 pb-32 hidden md:block"
      id="success"
    >
      <div className=" container mx-auto">
        <h2 className="h2 mb-16 text-center text-white">قصص النجاح</h2>

        {/* Swiper */}
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
        >
          {success.map((item, index) => {
            return (
              <SwiperSlide key={index} className="px-10 md:pr-10 xl:px-0">
                <div className="h-[200px] w-[270px] relative">
                  <Image
                    src={item.img}
                    fill
                    alt=""
                    className="object-cover bg-cente rounded-md grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Success;
