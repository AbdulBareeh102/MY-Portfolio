import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-pink-600 tracking-wider">
          Abdul-Barr
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold   text-pink-600 capitalize tracking-wide">
          I'm a Front-End Developer
        </h2>
        <p className="mt-2 text-lg text-[#ccd6f6]  capitalize tracking-wide py-4 max-w-[700px]">
          I'm a frontend-developer specializing in turning ideas into
          interactive reality, designing exceptional digital experience.
          currently, I'm focusing in building responsive frontend web
          application
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
