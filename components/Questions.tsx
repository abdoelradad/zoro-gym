"use client";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";
const questions = [
  {
    question: "ايه افضل وقت للتمرين ؟",
    answer: "افضل وقت للتمرين الوقت الى بتكون فى كامل طاقتك البدينة و الذهنيه",
  },
  {
    question: "هل احتاج لمدرب شخصى معايا فى التمرين ولا هاتمرن لوحدى ؟",
    answer: "افضل وقت للتمرين الوقت الى بتكون فى كامل طاقتك البدينة و الذهنيه",
  },
  {
    question: "هل هقدر هاشوف نتائج بعد اول شهر ؟",
    answer: "افضل وقت للتمرين الوقت الى بتكون فى كامل طاقتك البدينة و الذهنيه",
  },
  {
    question: "هل لازم اشترى مكملات ؟",
    answer: "افضل وقت للتمرين الوقت الى بتكون فى كامل طاقتك البدينة و الذهنيه",
  },
];

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [quesId, setQuesId] = useState(0);

  return (
    <section className="pt-24 pb-24">
      <div className="container mx-auto">
        <h3 className="h3 text-black text-center mb-16">
          عندك سؤال فى التدريب ؟
        </h3>

        <div className="flex items-center justify-between">
          <div className="w-[80%] md:w-[60%] flex flex-col justify-start gap-6">
            {questions.map((question, index) => {
              return (
                <div key={index} className=" border-b-[1px] border-black/20">
                  {/* question */}
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="h5 text-black">{question.question}</h5>
                    <button
                      onClick={() => {
                        setOpen(!open);
                        setQuesId(index + 1);
                      }}
                      className=" transition-all duration-300"
                    >
                      {open && quesId == index + 1 ? (
                        <FaMinus className="text-xl text-black" />
                      ) : (
                        <FaPlus className="text-xl text-black" />
                      )}
                    </button>
                  </div>

                  {/* answer */}
                  <div className="pb-3 mb-5 md:mb-0">
                    <p
                      className={`${
                        open && quesId == index + 1
                          ? "h-[25px] opacity-100"
                          : "h-0 opacity-0"
                      } transition-all duration-300`}
                    >
                      {question.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" relative">
            <Image
              src={"/assets/img/hero/hero-2.png"}
              width={400}
              height={400}
              alt="img"
              className="hidden md:block bgCrazy rounded-full shadow-xl "
            />
            <FaQuestion className="hidden md:block md:absolute top-10 border-[7px] border-accent right-16 text-8xl w-[100px] h-[100px] bg-white/80 p-5 rounded-full text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
