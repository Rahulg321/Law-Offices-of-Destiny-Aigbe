import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import BackgroundImageText from "./BackgroundImageText";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import ThemeToggle from "./theme-button";

const nav = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/our-firm", navlabel: "Our Firm" },
  { navlink: "/transactions", navlabel: "Transactions" },
  { navlink: "/practice-areas", navlabel: "Practice Areas" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/Team", navlabel: "Our Professionals" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
  { navlink: "/contact-destiny-aigbe", navlabel: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t-4 px-4 py-6 md:py-8 flex flex-col md:flex-row md:justify-around items-center">
      <div className="mb-4 text-center">
        <Link
          href="/"
          aria-label="Home page"
          className="text-4xl font-bold text-mainC"
        >
          Aigbe Law PLLC
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {nav.map((e, index) => (
            <Link
              href={e.navlink}
              key={index}
              className={"font-bold md:text-lg text-base"}
            >
              {e.navlabel}
            </Link>
          ))}
        </div>
        <div className="mt-2 text-sm ml-auto">
          <span>© 2024 Aigbe Law PLLC. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
