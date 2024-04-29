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
  return <footer className="border-t-4 p-4">My Footer</footer>;
};

export default Footer;
