import React from "react";
import Card from "@/components/Card";

export default function CardPage() {
  return (
    <div
      classNameName="flex flex-col items-center justify-center h-screen py-2 bg-cover bg-center"
      style={{ backgroundImage: 'url("/ass.jpeg")' }}
    >
      <Card />
    </div>
  );
}
