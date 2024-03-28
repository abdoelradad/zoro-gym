"use client";
import { HiUsers } from "react-icons/hi2";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import CustomButton from "./CustomButton";
const prices = [
  {
    title: "الباقة الفضية (3 شهور)",
    desc: "خصم 30% على الباقة الفضية",
    features: [
      {
        featTitle: "خطة تغذية مناسبة لهدف و مستواك",
        featIcon: <FaCheck />,
      },
      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },
    ],
    dis: "980",
    price: "650",
    isPopular: false,
  },
  {
    title: "الباقة الذهبية (3 شهور)",
    desc: "خصم 40% على الباقة الذهبية",
    features: [
      {
        featTitle: "خطة تغذية مناسبة لهدف و مستواك",
        featIcon: <FaCheck />,
      },
      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },
    ],
    dis: "1500",
    price: "950",
    isPopular: true,
  },
  {
    title: "الباقة الالماسية (3 شهور)",
    desc: "خصم 50% على الباقة الفضية",
    features: [
      {
        featTitle: "خطة تغذية مناسبة لهدف و مستواك",
        featIcon: <FaCheck />,
      },
      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },

      {
        featTitle: "خطة تدريب مناسبة لهدفك و مستواك",
        featIcon: <FaCheck />,
      },
    ],
    dis: "1500",
    price: "2500",
    isPopular: false,
  },
];

const Prices = () => {
  return (
    <section className=" pt-20 pb-32 bg-white" id="prices">
      <div className="container mx-auto ">
        <h2 className="h3 md:h2 text-center text-black mb-10 md:mb-16">
          اختر اشتراكك
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 "
        >
          {prices.map((card, index) => {
            return (
              <div
                key={index}
                className={`relative shadow-lg hover:shadow-xl transition-all cursor-pointer rounded-xl flex flex-col items-center text-center px-3 py-5 gap-5`}
              >
                {card.isPopular && (
                  <div className="absolute -top-6 font-bold px-3 py-1  border-b-[3px] border-accent  text-accent">
                    <p>الاكثر شهرة</p>
                  </div>
                )}
                <div className="gap-1 flex flex-col border-b-[1px]">
                  <h4 className="h6">{card.title}</h4>
                  <p className="text-sm font-bold text-accent pb-3">
                    {card.desc}
                  </p>
                </div>

                <ul className="flex items-center flex-col gap-3">
                  {card.features.map((feat, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center text-primary-100 gap-1"
                      >
                        <span className=" text-green-600">{feat.featIcon}</span>
                        <p className=" max-w-[200px]">{feat.featTitle}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className=" flex items-center justify-around w-full">
                  <p className=" line-through text-lg font-semibold text-primary-100">
                    {card.dis} جنيه
                  </p>
                  <p className="text-xl font-bold text-accent">
                    {card.price} جنيه
                  </p>
                </div>

                <CustomButton
                  containerStyles=" w-[150px] h-[40px]"
                  text="اشترك الان"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Prices;
