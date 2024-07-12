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
import { Button } from "./ui/button";

const nav1 = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/our-firm", navlabel: "Our Firm" },
  { navlink: "/transactions", navlabel: "Transactions" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/Team", navlabel: "Our Professionals" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
];

const nav2 = [
  { navlink: "/practice-areas", navlabel: "Practice Areas" },
  { navlink: "/news", navlabel: "News & Insights" },
  { navlink: "/careers", navlabel: "Careers" },
  { navlink: "/contact", navlabel: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t-4 px-4 py-6 md:py-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="mb-4">
        <Link
          href="/"
          aria-label="Home page"
          className="text-2xl md:text-4xl font-bold text-mainC"
        >
          Aigbe Law PLLC
        </Link>
        <div className="flex gap-4 mt-2 text-center">
          <div className="font-bold text-2xl">
            <FaInstagram />
          </div>
          <div className="font-bold text-2xl">
            <FaXTwitter />
          </div>
          <div className="font-bold text-2xl">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {nav1.map((e, index) => {
          return (
            <Link href={e.navlink} key={index} className="font-bold block">
              {e.navlabel}
            </Link>
          );
        })}
      </div>
      <div className="space-y-2">
        {nav2.map((e, index) => {
          return (
            <Link href={e.navlink} key={index} className="font-bold block">
              {e.navlabel}
            </Link>
          );
        })}
      </div>
      <div>
        <h3>Subscribe to our Newsletter</h3>
        <Button className="bg-mainC text-white merriFont rounded-md mt-4 p-4 md:p-6 lg:w-full">
          Subscribe
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
