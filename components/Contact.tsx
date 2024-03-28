import CustomButton from "./CustomButton";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <section id="contact" className=" bg-primary-200 py-24 pb-24">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text */}
          <div className="flex flex-col gap-5">
            <h2 className="h2">
              <span>اتصل بنا الان</span>
            </h2>
            <p className="text-gray-300">
              تعمل ممارسة الرياضة على رفع طاقتك، فتواجه كل صعوبة في حياتك بصبر،
              وتستخدم الإيجابية في التعامل مع كل ما يحدث في حياتك.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-accent text-xl" />
                <p>القاهرة - مدينة نصر</p>
              </div>
              <div className="flex items-center gap-2">
                <IoIosCall className="text-accent text-xl" />
                <p>20 323 939 232+</p>
              </div>
            </div>
          </div>
          {/* form */}
          <form className="flex w-[80%] justify-end flex-col gap-3 ">
            <input
              type="text"
              placeholder="الاسم 
            "
            />
            <input type="text" placeholder="البريد الالكترونى" />
            <textarea placeholder="اكتب رسالتك هنا " rows={5} />
            <div className="flex gap-3">
              <input
                className="w-[50%]"
                type="text"
                placeholder="
               رقم الهاتف"
              />
              <button className="w-[50%] bg-accent hover:bg-accent/90 transition-all duration-150">
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
