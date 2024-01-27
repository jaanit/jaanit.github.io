"use client";
// import React from "react";
// import { useRouter } from "next/router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Card() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleAbout = () => {
    console.log("reda >>>> ");
    router.push("/about");
  };

  const handelSendMessage = (value: string) => {
    setMessage(value);
  };

  // Add a click event listener

  useEffect(() => {
    const handleClick = () => {
      const textElement = document.getElementById("textElement");
      if (textElement) {
        textElement.textContent = "hoooos";
      }
    };

    document.addEventListener("DOMContentLoaded", () => {
      const textElement = document.getElementById("textElement");
      if (textElement) {
        textElement.addEventListener("click", handleClick);
      }

      return () => {
        if (textElement) {
          textElement.removeEventListener("click", handleClick);
        }
      };
    });
  }, []);

  return (
    <div className="flex  items-center justify-center flex-col   gap-2 mb-20">
      <div className="text-gray-500  w-[420] my-2  flex  justify-center">
        <img width="150px" height="1500px" src="/prof.png" alt="Description" />
      </div>
      <div className="group-hover:pb-10 transition-all duration-500 delay-200  flex flex-col items-center ">
        <Link
          href={"/about"}
          className=" text-gray-300 font-bold text-[20px] hover:text-[#ffffff] hover:cursor-pointer"
        >
          Reda Jaanit
        </Link>
        <p id="textElement" className="text-[#78773d] text-sm font-medium">
          Moving into Front-End Developer & Member @cpc1337
        </p>
        <p className="text-gray-300 text-sm mt-2 font-extralight">
          Diving deep to understand the inner workings of web development.
          <br></br> Bridging creativity and code to shape the future of the web.
        </p>
      </div>
      <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full  justify-evenly w-full ">
        <div className="flex gap-3 text-2xl bg-[#78773d]  text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm ">
          <a
            className="hover:scale-110 transition-all duration-500 delay-200"
            href="https://www.github.com/jaanit"
          >
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 1024 1024"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
          <div
            className="hover:scale-110 transition-all duration-500 delay-200 hover:cursor-pointer "
            onClick={handleAbout}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          </div>
          <a
            className="hover:scale-110 transition-all duration-500 delay-200"
            href="https://www.linkedin.com/in/reda-jaanit-008a0823a/"
          >
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 960 1000"
            >
              <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="w-[320px] h-[145px] bg-pink-00 right-10 bottom-10 absolute rounded-md justify-center flex px-3 border border-rounder-md">
        <div className="flex items-center flex-col justify-center gap-3">
          <p className="text-sm">
          Hi there, thanks for visiting Intelivita. What service are you looking for assistance with? <br />
          </p>
          <div className="flex items-center gap-2 bg-blac w-[100%] ">
            <input
              className="rounded-md h-[40px] w-[100%] bg-transparent text-slate-300 border outline-none p-2"
              placeholder="Write your message"
              // value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              classNameName="text-white hover:scale-110 transition-all duration-500 delay-200 hover:cursor-pointer"
              onClick={() => {handelSendMessage(message)}}

            >
              <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909L3.03 19.242a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81" />
            </svg>
          </div>
        </div>
      </div> */}
      {/* <div classNameName="flex space-x-2 right-5 bottom-9 absolute">
        <div classNameName="bg-black font-bold uppercase  mb-2 ml-auto border  rounded-md flex justify-center border-[#70ff00] text-[#70ff00] hover:text-black hover:bg-[#70ff00] items-center px-2 hover:scale-105 ">
          <p classNameName="rounded-md p-1 text-[10px]     hover:cursor-pointer inline-block ">
            resume
          </p>
        </div>
        <div classNameName="font-bold uppercase  mb-2 ml-auto rounded-md flex justify-center text-black bg-[#70ff00]  hover:text-black  items-center px-2 hover:scale-105">
          <a
            href="https://cal.com/reda-jaanit-tnxd5y"
            classNameName="rounded-md p-1 text-[10px]     hover:cursor-pointer inline-block "
          >
            Book a call
          </a>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
}
