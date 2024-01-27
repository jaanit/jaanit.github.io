"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

export default function Home() {
  const [display, setDisplay] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setDisplay(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [display]);
  return (
    <>
      <div classNameName="row-span-4 grid grid-cols-8 border-b">
        <div classNameName="col-span-4 border-r">
          {" "}
          {/* <img
            src="/profil.png"
            alt="Description"
            classNameName="w-full h-full object-cover"
          /> */}
        </div>
        <div classNameName="col-span-4  space-x-2 flex-col flex justify-between  ">
          <div classNameName="flex-col  justify-center flex gap-2 ml-2 mt-14 uppercase">
            <h1 classNameName="font-bold uppercase text-[13px]">- SKILLS</h1>
            <div classNameName="flex gap-2 font-bold uppercase  text-gray-200 ">
              <h6 classNameName="rounded-md p-1 text-[9px] bg-transparent border-[0.3px] hover:text-black  border-gray-400 text-center hover:bg-[#70ff00] hover:cursor-text">
                C++
              </h6>
              <h6 classNameName="rounded-md p-1 text-[9px] bg-transparent border-[0.3px] hover:text-black border-gray-400 text-center hover:bg-[#70ff00] hover:cursor-text">
                JavaScript
              </h6>
              <h6 classNameName="rounded-md p-1 text-[9px] bg-transparent border-[0.3px] hover:text-black border-gray-400 text-center hover:bg-[#70ff00] hover:cursor-text">
                Python
              </h6>
            </div>
            <div classNameName=" flex gap-2 font-bold uppercas  text-white">
              <span classNameName=" rounded-md p-1 text-[9px] hover:text-black bg-transparent  border-[0.3px] flex justify-center border-gray-400  hover:bg-[#70ff00] hover:cursor-text">
                web development
              </span>

              <h6 classNameName=" rounded-md p-1 text-[9px] bg-transparent border-[0.3px] flex justify-center border-gray-400  hover:bg-[#70ff00] hover:text-black hover:cursor-text">
                porobleme solving
              </h6>
            </div>
            <div classNameName=" flex gap-2 font-bold uppercas  text-white">
              <span classNameName=" rounded-md p-1 text-[9px] hover:text-black bg-transparent  border-[0.3px] flex justify-center border-gray-400  hover:bg-[#70ff00] hover:cursor-text">
                FRoNTEND
              </span>

              <h6 classNameName=" rounded-md p-1 text-[9px] bg-transparent border-[0.3px] hover:text-black flex justify-center border-gray-400  hover:bg-[#70ff00] hover:cursor-text">
                ui / ux
              </h6>
              <h6 classNameName=" rounded-md p-1 text-[9px] bg-transparent border-[0.3px] hover:text-black flex justify-center border-gray-400  hover:bg-[#70ff00] hover:cursor-text">
                git
              </h6>
            </div>
          </div>
          <div classNameName=" font-bold uppercase  mb-2">
            <Link
              classNameName="rounded-md p-1 text-[9px] text-black bg-[#70ff00] border-gray-400 hover:bg-[#70ff00] hover:cursor-pointer inline-block"
              href={"/unnamed.gif"}
              target="_blank"
            >
              qr-code
            </Link>
          </div>
          {display && (
            <div
              classNameName="card bg-slate-300  absolute"
              ref={cardRef}
              style={{
                background: 'url("code.png")',
                backgroundSize: "100% 100%", // Adjust the width and height as needed
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                // backgroundPosition: 'center left', // Adjust the position as needed
              }}
            >
              {/* <p classNameName="title">Magic Card</p> */}
            </div>
          )}
        </div>
      </div>
      <div classNameName="row-span-4  m-4 flex justify-between flex-col">
        <div classNameName="flex flex-col ">
          <p classNameName="text-2xl font-bold text-[#70ff00] text-opacity-90 text-brand-green sm:text-3xl md:text-4xl uppercase">
            Reda Jaanit
          </p>
          <p classNameName="text-sm font-monaco text-purple-700  text-brand-green sm:text-3xl md:text-lg ml-4">
            Software Developer
          </p>
          <p classNameName="ml-2 mt-2 text-slate-100 reda">
            I am a Front-end developer. During the last 3 years, I went from
            low-level programming to a JavaScript, and web development
            passionate, I love using modern TypeScript frameworks .
          </p>
        </div>
        <div classNameName="flex space-x-2 ">
          <div classNameName="bg-black font-bold uppercase  mb-2 ml-auto border  rounded-md flex justify-center border-[#70ff00] text-[#70ff00] hover:text-black hover:bg-[#70ff00] items-center px-2">
            <Link
              href={"/rjaanit_cv.pdf"}
              target="_blank"
              classNameName="rounded-md p-1 text-[10px]     hover:cursor-pointer inline-block "
            >
              resume
            </Link>
          </div>
          <div classNameName="font-bold uppercase  mb-2 ml-auto rounded-md flex justify-center text-black bg-[#70ff00]  hover:text-black  items-center px-2">
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
                clipRule="evenodd"
                fill="currentColor"
                fillRule="evenodd"
                d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div classNameName="row-span-1 border-t flex justify-center items-center ">
        <nav classNameName=" flex space-x-8">
          <svg
            classNameName="hover:text-[#70ff00] hover:text-opacity-90 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="28"
            fill="currentColor"
          >
            <path d="M15 6.947c-.368.16-.763.27-1.178.318.424-.25.748-.646.902-1.117-.398.231-.836.4-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02 0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11 1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98 2.108 2.108 0 0 1-.927.034 2.049 2.049 0 0 0 1.916 1.403 4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947z"></path>
            <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
          </svg>
          <svg
            classNameName="hover:text-[#70ff00] hover:text-opacity-90 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="28"
            fill="currentColor"
          >
            <path
              d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"
              clipRule="evenodd"
            ></path>
            <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
          </svg>
          <svg
            classNameName="hover:text-[#70ff00] hover:text-opacity-90 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="28"
            fill="currentColor"
          >
            <path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"></path>
            <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
          </svg>
        </nav>
      </div>
    </>
  );
}
