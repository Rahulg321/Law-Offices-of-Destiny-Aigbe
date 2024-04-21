"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import TopBar from "./TopBar";
import NavigationMenuHeader from "./NavigationMenuHeader";

type HeaderProps = {
  classname?: string;
};

const nav = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/about-destiny-aigbe", navlabel: "About" },
  { navlink: "/contact-destiny-aigbe", navlabel: "Contact" },
];

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={clsx("px-2 py-1 border-b-2", classname)}>
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col justify-between md:m-4 md:flex-row md:items-center md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className="block text-2xl  text-black dark:text-white md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black text-white pr-4 pt-14  transition-transform duration-300 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              <button
                aria-label="Close menu"
                className="fixed right-4 top-3 block p-2 text-2xl text-white md:hidden "
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </button>
              {nav.map((item, index) => {
                return (
                  <Link
                    href={item.navlink}
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "",
                      pathname === item.navlink ? "underline" : ""
                    )}
                  >
                    {item.navlabel}
                  </Link>
                );
              })}
            </div>
            <DesktopMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

function NameLogo({}: {}) {
  return (
    <div className="">
      <h3>
        <Link href="/" aria-label="Home page" className="">
          Destiny Aigbe
        </Link>
      </h3>
    </div>
  );
}

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-4 md:flex">
      {/* <NavigationMenuHeader /> */}
      {nav.map((item, index) => {
        return (
          <Link
            href={item.navlink}
            key={index}
            className={clsx(
              "font-semibold",
              pathname === item.navlink ? "underline" : ""
            )}
          >
            {item.navlabel}
          </Link>
        );
      })}
    </div>
  );
}
