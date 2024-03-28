"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import Image from "next/image";

const programs = [
  {
    img: "/assets/img/program/program-1.webp",
    title: "برنامج تمارين المقاومة",
    desc: "برنامج تدريب القوة هو الأساس لزيادة العضلات. باستخدام منهج علمي، نقدم نظامًا مخصصًا لتحقيق أقصى نتائج بسرعة.",
  },
  {
    img: "/assets/img/program/program-2.webp",
    title: "2. خطة تغذية شخصية",
    desc: "تحقيق أهدافك يعتمد على التغذية السليمة. برنامج التغذية لدينا شامل، حيث نأخذ في اعتبارنا أهدافك، وتفضيلاتك الغذائية، واحتياجاتك الغذائية، وحتى ظروف عملك.",
  },
  {
    img: "/assets/img/program/program-3.webp",
    title: "3. دمج العلاج الطبيعي",
    desc: "صحتك هي أولويتنا. نتعامل مع الإصابات أو القيود في برنامج تدريب القوة الخاص بك، مضمونين سلامتك وتقدمك.",
  },
];

const Program = () => {
  return (
    <section className="pt-16 pb-24 bg-white" id="program">
      <div className="container mx-auto">
        {/* title */}
        <motion.h3
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="h4 md:h3 text-center mb-12"
        >
          برنامجك التدريبي بيشمل :
        </motion.h3>

        {/* programs + button */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center flex-col justify-center gap-12"
        >
          {/* programs cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {programs.map((program, index) => {
              return (
                <div
                  key={index}
                  className="bg-black w-[300px] h-[450px] rounded-xl"
                >
                  {/* img */}
                  <div className="h-[50%] relative">
                    <Image
                      fetchPriority="low"
                      src={program.img}
                      fill
                      alt="My img"
                      className="max-w-full bg-center object-cover rounded-xl"
                    />
                  </div>
                  {/* text */}
                  <div className="h-[50%] px-4 py-3">
                    <h4 className="h4 text-white mb-2">{program.title}</h4>
                    <p className="text-lg text-gray-300">{program.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* button */}
          <CustomButton
            text="إشترك الان"
            containerStyles="h-[50px] w-[150px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Program;
