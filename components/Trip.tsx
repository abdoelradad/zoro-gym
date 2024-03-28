import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

const featured = [
  {
    icon: <FaUsers />,
    title: "مدربيين معتمدين",
    desc: "نخبة من أفضل المدربيين المعتمدين من الاتحاد الدولى لكمال الاجسام",
  },
  {
    icon: <IoIosPricetag />,
    title: "أسعار مناسبة",
    desc: "أفضل جودة و خدمة مقابل أفضل الاسعار و الخصومات الحصريه فقط",
  },
  {
    icon: <FaDumbbell />,
    title: "معدات  حديثة",
    desc: "أفضل الأجهزة الرياضية المعتمدة عالميا لضمان جودة التدريب بكافة المتسويات العالمية",
  },
];

const Trip = () => {
  return (
    <section className="pt-16 pb-24 bg-black">
      <div className="container mx-auto">
        <h2 className="h2 text-center text-white mb-10">
          ليه تبدأ رحلتك معنا ؟{" "}
        </h2>

        {/* featured container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {featured.map((feature, index) => {
            return (
              <div
                className="flex items-start flex-col md:flex-row bg-primary-200 p-6 gap-5 rounded-xl cursor-pointer transition-all
                  trip h-[270px] md:h-[220px]"
                key={index}
              >
                <div
                  className={`w-[20%] bg-gray-700 rounded-md text-white tripIcon py-3 text-4xl flex items-center justify-center`}
                >
                  {feature.icon}
                </div>

                <div className="w-[80%]">
                  <h4 className="h4 text-white mb-3 pb-2 border-b-[3px] border-accent">
                    {feature.title}
                  </h4>
                  <p className="text-lg text-gray-300">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trip;
