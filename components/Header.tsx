"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        headerActive ? "h-[70px]" : "h-[80px]"
      } fixed w-full bg-primary-200 h-[100px] transition-all z-50 top-0 max-w-[1920px]`}
    >
      <div className="container mx-auto h-full flex items-center justify-between flex-row-reverse">
        {/* Logo */}
        <Link
          href={"#"}
          className="flex items-center gap-2"
          aria-label="Read more about Seminole tax hike"
        >
          <FaDumbbell className="text-4xl text-white" />
        </Link>

        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[70px]" : "top-[80px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full transition-all left-0 text-base text-white xl:hidden`}
        />

        {/* hide/open menu button */}
        <div>
          {/* desktop nav - hidden on small devices */}
          <Nav containerStyles="flex gap-10 text-white text-base hidden transition-all xl:flex" />
          <button
            aria-label="Name"
            onClick={() => setOpenNav(!openNav)}
            className={`${
              openNav ? "rotate-90" : "rotate-0"
            } text-white xl:hidden flex items-center justify-center transition-all`}
          >
            <MdMenu className=" text-white text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
