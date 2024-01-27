"use client";
import React, { useState } from "react";
import Home from "./Home";

export function Content() {
  // const [isHovered, setIsHovered] = useState(0);
  // const handleMouseEnter = (key: number) => {
  //   setIsHovered(key);
  //   console.log("key", key);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(0);
  //   console.log("key", 0);
  // };

  return (
    <div classNameName="w-[100%] h-[100%] border-gray-300 grid grid-cols-2 ">
      <div classNameName="col-span-1 border-r grid grid-rows-9 ">
        <Home />
      </div>
      <div classNameName="col-span-1  flex  flex-col justify-center gap-10">
        <div classNameName="container relative">
          <div classNameName={` loader bg-[#70ff00] `}></div>
        </div>
        <div classNameName="text-2xl font-bold uppercase pl-6 ">
          <span classNameName=" text-4xl text-[#70ff00] ">
            “ web development <br></br>{" "}
          </span>
          <span classNameName=" ">
            is difficult, only when you set your standard it's <br></br>
          </span>
          <span classNameName=" text-4xl text-[#70ff00] ">fun to do it ” </span>
        </div>
      </div>
    </div>
  );
}

// web development is difficult, only when you set your standard is it fun to do it.
