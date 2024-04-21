"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-4 items-center">
      <div
        onClick={() => {
          setTheme("light");
        }}
        className="cursor-pointer text-xl"
      >
        <IoSunnyOutline />
      </div>
      <div
        onClick={() => {
          setTheme("dark");
        }}
        className="cursor-pointer text-xl"
      >
        <IoMoonOutline />
      </div>
      <div
        onClick={() => {
          setTheme("system");
        }}
        className="cursor-pointer text-xl"
      >
        <RiComputerLine />
      </div>
    </div>
  );
}
