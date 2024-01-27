"use client";

import React from "react";
import { useRouter } from "next/router";

import Display from "@/components/Home";
import Image from "next/image";
import NavBar from "@/components/navBar";
import Head from "next/head";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Content } from "@/components/Content";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <div className=" w-[978px] h-[794px] flex flex-col border border-gray-300 ">
      <Header />
      <About />
      <Project />
    </div>
  );
}
