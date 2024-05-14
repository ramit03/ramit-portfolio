import MoonAnimation from "@/components/ui/moonHero";
import React from "react";

function page() {
 

  return (
    <main className="bg-[#0F0F0F] w-full h-screen px-6 overflow-hidden sm:px-8 md:px-12 lg:px-20 2xl:px-48">
      <section className="flex flex-col-reverse items-center lg:flex-row  pt-8 gap-24 sm:gap-14 lg:gap-8 xl:gap-14">
        <div className="flex flex-col gap-4 sm:gap-8">
        <h1 className="font-roboto text-textcol font-semibold text-4xl">My name is Ramit</h1>
        <h2 className="text-textcol text-2xl leading-9">I am a software Developer based in Sikkim, India. Currently I'm working at  
        <span className="hover:text-light px-2 w-fit hover:underline cursor-pointer transition-all duration-500 rounded-md">
            redendron.media
        </span>, leading the development projects. </h2>
        </div>  
        <MoonAnimation/>
        
      </section>
    </main>
  );
}

export default page;
