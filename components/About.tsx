"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white pt-16 pb-16">
      <div className="container mx-auto">
        {/* text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 mx-auto text-center">
          <h1 className="h2 md:h1 text-center">فلسفة التدريب</h1>
          <h4 className="h5 md:h4">
            الرياضة من أهم الأنشطة التي يجب على الجميع ممارستها كأسلوب حياة
            وبشكلٍ دائم، وعدم جعلها مرتبطة بمكان أو زمان معين؛ إذ يُمكن ممارس
            الرياضية يوميًا
          </h4>
          <p className="text-md md:text-xl text-gray-700">
            ساعد الرياضة في إعطاء الحلول المنطقية للأزمات التي يمرّ بها الشخص من
            ناحية نفسية؛ لأنّها تُحفز التفكير الإيجابي، إذ إنّ تأثير الرياضة
            كبير جدًا على العقل، وهذا ما يجعل الكثير من الأشخاص الذين جربوا
            تأثير الرياضة في حياتهم يحرصون على أن يُمارسوا الرياضة بشكلٍ يومي
            ومنتظم، وليس شرطًا أن يشترك الشخص بالنادي الرياضي كي يقوم بها
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
