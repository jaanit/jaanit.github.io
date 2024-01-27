"use client";
import { useEffect, useState } from "react";
import Display from "./Home";
import DarkMod from "./darkMod";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [click, setClick] = useState(-1);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    console.log("menu");
    setMenu(true);
  };
  const handleHome = () => {
    setClick(0);
    console.log("home", click);
  };

  const handleProject = () => {
    setClick(2);
  };

  const handleContact = () => {
    setClick(1);
  };

  return (
    <div className="flex   w-[86%] font-thin my-4 text-md  px-2">
      <div className="flex w-[60%]  mr-auto ">
        <div className=" flex justify-center items-center flex-col">
          <Link href="/unnamed.gif" className={` text-white  text-sm `}>
            REDA JAANIT
          </Link>
          <p className=" text-yellow-600">(Front-End Developer)</p>
        </div>
      </div>
      <div className="flex ml-auto  items-center  w-[40%]   ">
        <div className="   ml-auto flex flex-col xs:flex-row   xs:gap-12">
          <Link
            href="/"
            className={`relative   hover:text-white text-lg text:lg `}
            onClick={handleHome}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`relative hover:text-white text-lg`}
            onClick={handleProject}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={` relative hover:text-white text-lg`}
            onClick={handleContact}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
