import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-16 bg-primary-300">
      <div className="container mx-auto flex items-center flex-col gap-10">
        <div className="flex items-center justify-center gap-5">
          <FaFacebook className="text-2xl text-white hover:text-accent transition-all duration-300 cursor-pointer" />
          <FaTwitter className="text-2xl text-white hover:text-accent transition-all duration-300 cursor-pointer" />
          <FaInstagram className="text-2xl text-white hover:text-accent transition-all duration-300 cursor-pointer" />
        </div>
        <div className=" text-gray-500 text-base text-center">
          Copyright{" "}
          <span className=" inline-block">
            <FaRegCopyright className="text-sm" />
          </span>{" "}
          2024 Abdoelradad. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
