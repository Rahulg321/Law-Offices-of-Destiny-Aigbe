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
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
  { navlink: "/contact-destiny-aigbe", navlabel: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t-4">
      <div className="big-container block-space-mini grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="text-balance md:col-span-2">
          <h4>The Law Offices of Destiny Aigbe</h4>
          <div className="">
            <div className="flex gap-4 justify-start mt-4">
              <div className="text-2xl">
                <FaInstagram />
              </div>
              <div className="text-2xl">
                <FaLinkedin />
              </div>
              <div className="text-2xl">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul className="flex flex-col gap-2">
            {nav.map((item, index) => (
              <li key={index}>
                <Link href={item.navlink}>{item.navlabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul className="flex flex-col gap-2">
            {nav.map((item, index) => (
              <li key={index}>
                <Link href={item.navlink}>{item.navlabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2">Preferences</h4>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
