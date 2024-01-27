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
import Card from '@/components/Card'; // Update the import statement
import Areana from "@/components/Areana";



export default function Home() {
  return (
    <>
      <Areana/>
    </>
  );
}
