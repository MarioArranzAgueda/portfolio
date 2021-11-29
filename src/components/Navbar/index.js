import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center flex-nowrap justify-between">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0"
        >
          <span className="text-xl">Mario Arranz Águeda</span>
        </a>
        <nav className="flex-wrap md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex items-center text-base justify-between">
          <a href="#projects" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>
        <div className="flex justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/mario-arranz-%C3%A1gueda-48512843/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-gray-600"
          >
            <AiFillLinkedin className="text-4xl" />
          </a>
          <a
            href="https://github.com/MarioArranzAgueda"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-gray-600"
          >
            <AiFillGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
