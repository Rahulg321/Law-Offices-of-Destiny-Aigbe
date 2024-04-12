import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import BackgroundImageText from "./BackgroundImageText";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const nav = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
  { navlink: "/contact-destiny-aigbe", navlabel: "Contact" },
];

const Footer = () => {
  return (
    <React.Fragment>
      <BackgroundImageText classname="min-h-[80vh]">
        <div>
          <div>
            <FaLocationDot />
            <span>Address</span>
            <span>
              1700 Palm Beach Lakes Blvd.
              <br /> Suite 820 <br /> West Palm Beach, FL 33401
            </span>
          </div>
          <div>
            <MdOutlinePhoneAndroid />
            <span>Phone</span>
            <span>844-254-9919</span>
          </div>

          <div className="flex">
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>

          <div>
            <button>Contact Us</button>
          </div>
        </div>
      </BackgroundImageText>
      <footer>
        <div>
          <FaRegCopyright />
          <span>The Law Offices of Destiny Aigbe</span>
          <span>All Rights Reserved</span>
        </div>
        <div>
          <nav>
            {nav.map((item, index) => (
              <Link href={item.navlink} key={index}>
                {item.navlabel}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
