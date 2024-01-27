"use client";
import React, { useState } from "react";
import Home from "./Home";

const ProjectData = [
  {
    name: "ft_transcendence",
    date: "2023-12-16",
  },
  {
    name: "Inception",
    date: "2023-08-27",
  },
  {
    name: "Webserv",
    date: "2023-06-19",
  },
  {
    name: "Cube3D",
    date: "2022-11-11",
  },
  {
    name: "MiniShell",
    date: "2022-06-26",
  },
  {
    name: "Push_swap",
    date: "2022-05-04",
  },
];
export function Project() {
  console.log("////////", ProjectData[0].date);
  function timeAgo(dateStr: string) {
    const inputDate = new Date(dateStr);
    console.log("inputDate", inputDate);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = daysAgo / 365;

    if (yearsAgo > 1) {
      return yearsAgo === 1
        ? "1 year ago "
        : `${Math.round(yearsAgo)} years ago`;
    } else if (monthsAgo > 0) {
      return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "Just now";
    }
  }

  const [isHovered, setIsHovered] = useState(-1);
  const [project, setProject] = useState(ProjectData[0].name);
  const handleMouseEnter = (key: number) => {
    setIsHovered(key);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  const [isClicked, setIsClicked] = useState(0);
  const handleClick = (key: number) => {
    setIsClicked(key);
    setProject(ProjectData[key].name);
    console.log(timeAgo(ProjectData[key].date));
  };

  return (
    <div classNameName="w-[100%] h-[100%]  border-gray-300 grid grid-cols-2">
      <div classNameName="col-span-1 border-r grid grid-rows-9">
        {/* <Home></Home> */}
      </div>
      <div classNameName="col-span-1 flex  flex-col pl-white  text-black ">
        <div classNameName="h-[15%] flex justify-center font-bold items-center text-3xl border-b bg-transparent text-white">
          {project}
        </div>
        {ProjectData.map((project, key) => (
          <div
            key={key}
            classNameName={`p-2 flex items-center h-[8%] rounded-lg hover:cursor-pointer justify-between mx-6 mt-4 ${
              isClicked === key
                ? "bg-zinc-800 bg-opacity-80 bg-transparent"
                : ""
            }`}
            onClick={() => handleClick(key)}
          >
            <span
              classNameName={`text-gray-200 text-xl font-bold ${
                isClicked === key ? "text-black" : ""
              }`}
            >
              {project.name}
            </span>
            <p
              classNameName="text-gray-400"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered === key
                ? ProjectData[key].date
                : timeAgo(ProjectData[key].date)}
            </p>
          </div>
        ))}
        {/* <div classNameName="mt-auto ml-6">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84.03 122.88"
            height={150}
          >
            <defs>
              <style>{`.cls-1{fill:#7ebc1b;fillRule:evenodd;}.cls-2{fill:#629907;}`}</style>
            </defs>
            <path
              classNameName="cls-1"
              d="M47.79,108.75c60.66.20,29.44-75.92,17.84-100.68C65.28,7.32,62.15-.15,61.86,0c-.18-.30-7,4.88-7.7,5.37-22.79,16-86.09,64.53-34.32,96,19.83,12,5.39,7.35,28,7.42Z"
            />
            <path
              classNameName="cls-2"
              d="M27.85,118l7.53-26.62a41.12,41.12,0,0,1-7.59-11.91,78.08,78.08,0,0,1-5.21-17.19l-.88-4.9,2.09,5.31c3.49,8.83,8.23,20.86,12.70,25l5.22-17.37A48.29,48.29,0,0,1,34,59.05a47.79,47.79,0,0,1-4.12-12.92l-.76-4.20,1.69,3.92A139.66,139.66,0,0,0,37,58.9a27.18,27.18,0,0,0,5.80,7.6L46.60,54a46.61,46.61,0,0,1-7.24-11.14,48.64,48.64,0,0,1-3.73-12.91L35,25.55l1.62,4.11a132.82,132.82,0,0,0,5.75,13c1.77,3.35,3.57,6,5.42,7.47l9.63-32.08.95.26L51.51,46.21c2.33-.38,5.18-1.75,8.35-3.75a133.73,133.73,0,0,0,11.50-8.4l3.46-2.75-2.77,3.44a48.16,48.16,0,0,1-9.67,9.31,46.28,46.28,0,0,1-11.82,6L47.47,62.75a28.37,28.37,0,0,0,8.86-3.70A143.31,143.31,0,0,0,68.27,51l3.43-2.52L68.94,51.70a48.32,48.32,0,0,1-10.06,9.06,48.61,48.61,0,0,1-12.34,5.78L42,85a42.85,42.85,0,0,0,10-5.27A120.74,120.74,0,0,0,66.18,68.7l3-2.76-2.27,3.40A49.3,49.3,0,0,1,55.65,80.72a58.43,58.43,0,0,1-14.57,8.12l-7.94,30.53c-.06.25-.12.52-.17.78l-.12.57c-.36,1.55-.88,2.56-3.30,2s-2.55-1.59-2.22-3a11.83,11.83,0,0,1,.33-1.14l.19-.60Z"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}
