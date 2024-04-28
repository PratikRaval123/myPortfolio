"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className=" w-screen h-screen px-[5%] sm:px-[10%] py-20 ">
      <div className="flex flex-col gap-10 w-full h-full relative">
        <div className=" w-[100%] md:w-[50%] h-full p-6 sm:p-10">
          <div className="bg-zinc-800 h-full w-full"></div>
        </div>
        <div className="text-white absolute bottom-[20%] left-[50%] translate-x-[-50%] md:bottom-[40%] md:right-[20%] md:translate-x-0 animate-[fadeRight_3s_ease-out]">
          <pre className="text-sm sm:text-xl lg:text-2xl font-semibold">
            <h1>
              Hello, I’m{" "}
              <span className=" text-yellow-300">Jems R Rakholiya</span>
            </h1>
            <h1 className="text-slate-500">
              <Typewriter
                words={["Fullstack web-developer", "Software Engineer"]}
                loop={true}
                typeSpeed={100}
                deleteSpeed={100}
                cursor={true}
                cursorStyle="|"
              />
            </h1>
          </pre>
        </div>
        <div className="flex justify-center items-center font-extrabold text-xl sm:text-3xl lg:text-5xl text-green-600 py-4 tracking-wide absolute bottom-0 w-full animate-[fadeDown_2s_ease-out]">
          <Typewriter
            words={[
              "Fullstack web-developer",
              "Software Engineer",
              "Freelancer",
            ]}
            loop={true}
            typeSpeed={100}
            deleteSpeed={70}
            cursor={true}
            cursorStyle="|"
          />
        </div>
      </div>
    </main>
  );
}
