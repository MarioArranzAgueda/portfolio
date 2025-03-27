import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center justify-between">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mario Arranz.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Front end developer with strong experience in JavaScript frameworks. Always willing to work with different technologies like React, Angular, NodeJS or any JavaScript library and be ready for new challenges. A lover and enthusiast of clean code.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://media.licdn.com/dms/image/v2/D4E03AQF6bOdvI7F1cQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690280519347?e=1748476800&v=beta&t=3Q85G-h-5CoCmClf1Mt1wh1s_RidhcypoCTxQIGA6G4"
          />
        </div>
      </div>
    </section>
  );
}
