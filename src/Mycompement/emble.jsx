"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Futur from "../assets/2025.jpg";

 import Flag from "../assets/flag.png";
export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex lg:flex-row flex-col">
          
            <h1 className="text-4xl font-semibold lg:mb-7 text-black/60 dark:text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              BUILD
              </span>
            </h1>
        
              </div>
              <div className="flex lg:flex-row flex-col ml-44">
           <h1
      className="lg:text-8xl md:text-8xl text-4xl md:text-[6rem] lg:mb-7 bg-cover bg-center bg-no-repeat  text-transparent bg-clip-text"
      style={{
        backgroundImage: `url(${Flag})`,
        WebkitBackgroundClip: "text",
      }}
    >
    THE FUTURE
    </h1> </div>
    <h1 className="text-4xl md:text-[6rem] text-black/60  font-bold mt-1 leading-none lg:mb-12 lg:ml-80 dark:text-white">
          WITH CIMAS
         </h1>
         </>
        }>
        <img
          src={Futur}
          alt="hero"
          height={720}
          width={9400}
          className="mx-auto rounded-2xl w-full  h-full object-left-top drop-shadow-lg"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
