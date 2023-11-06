import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import ReactImg from "../assets/react.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4 text-2xl">
            // These are technology I've worked on{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow shadow-[#04bc16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
