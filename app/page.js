"use client"

import Image from "next/image";
import mongo from "../lib/mongoose"
import Form from "@/components/Form/Form";
import Header from "@/components/header/Header";
import { useState } from "react";

export default function Home() {
  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkmode =  () => {
   setDarkmode((d) => !d)
  }
  return (
    <main className={ darkmode ? "flex flex-col items-center justify-centerw-full h-screen bg-[#181824] white" : "flex flex-col items-center justify-centerw-full h-screen bg-white"}>
      <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode}/>
      <Form darkmode={darkmode}/>
      </main>
  );
}
