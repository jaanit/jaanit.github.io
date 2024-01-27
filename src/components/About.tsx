"use client";

import Router from "next/navigation";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useState } from "react";
// import { useRouter } from "next/router";

export function About() {
  const [isClicked, setIsClicked] = useState(-1);
  const route = useRouter();

  const handleProject = () => {
    route.push("/project");
    setIsClicked(1);
    console.log("project", isClicked);
  };

  const handleHome = () => {
    route.push("/about");
    setIsClicked(0);
    console.log("home", isClicked);
  };

  const handleEducation = () => {
    route.push("/education");
    setIsClicked(2);
    console.log("education", isClicked);
  };

  return (
    <div classNameName="w-[100%] h-[136.76px] border-gray-300 border-r flex justify-center items-center space-x-8 text-slate-50 border-b bg-zinc-800 bg-opacity-80 bg-transparent ">
      <p
        classNameName={`hover:cursor-pointer underline hover:text-[#70ff00] ${
          isClicked === 0 ? "text-[#70ff00] hover:text-[#70ff00] " : ""
        }`}
        onClick={handleHome}
      >
        Home
      </p>
      <p
        classNameName={`hover:cursor-pointer underline hover:text-[#70ff00] ${
          isClicked === 1 ? "text-[#70ff00]" : ""
        }`}
        onClick={handleProject}
      >
        Projects
      </p>
      <p
        classNameName={`hover:cursor-pointer underline hover:text-[#70ff00] ${
          isClicked === 2 ? "text-[#70ff00] " : ""
        }`}
        onClick={handleEducation}
      >
        Education
      </p>
    </div>
  );
}
