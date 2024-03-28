"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "الرئيسية", target: "home", offset: -100 },
  { name: "البرامج", target: "program", offset: -70 },
  { name: "التحولات", target: "success", offset: -70 },
  { name: "اشترك معنا", target: "prices", offset: -70 },
  { name: "الشركاء", target: "#", offset: 0 },
  { name: "تواصل معنا", target: "contact", offset: -70 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            aria-label="Name"
            offset={link.offset}
            key={index}
            to={link.target}
            smooth
            spy
            className=" cursor-pointer hover:text-accent transition-all"
            activeClass="active"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
