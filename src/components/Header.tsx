"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const router = useRouter();
  const handleExit = () => {
    router.push("/");
  };

  function getCurrentTime() {
    const now = new Date();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = dayNames[now.getDay()];
    const hour = now.getHours();
    const minute = now.getMinutes();

    const formattedTime = `${dayName}, ${formatTimeComponent(
      hour
    )}:${formatTimeComponent(minute)}`;

    return formattedTime;
  }

  function formatTimeComponent(component: number) {
    return component < 10 ? `0${component}` : component;
  }

  return (
    <header classNameName="w-[100%] h-[41.76px] border-b border-gray-300 flex items-center justify-between">
      <h1 classNameName="text-[#bebebe] text-[14px] font-mono ml-6">
        Rabat, {currentTime}
      </h1>
      <Link href="/">
        <div classNameName="flex items-center h-[100%] px-0.5 border-l hover:cursor-pointer hover:bg-zinc-800">
          <svg
            width="26"
            height="24"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            />
          </svg>
        </div>
      </Link>
    </header>
  );
}
