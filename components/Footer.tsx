import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";

const nav = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
  { navlink: "/contact-destiny-aigbe", navlabel: "Contact" },
];

const Footer = () => {
  return (
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
  );
};

export default Footer;
