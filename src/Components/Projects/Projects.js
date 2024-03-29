import React, { useState } from "react";
import "./Projects.css";
import managesysimg from "../../images/managesys_fp.png";
import wantodoimg from "../../images/wantodo_fp.png";
import magic8ballimg from "../../images/8ball_fp.png";
import codecolor from "../../images/codecolor.png";
import sitecolor from "../../images/sitecolor.png";
import calculatorimg from "../../images/calculator_fp.png"

const projectArray = [
  {
    picture: managesysimg,
    title: "Full-Stack Web App",
    name: "Manage.sys",
    description:
      "Store management system where users can create accounts, then do CRUD operations with employee data.",
    stack: [
      "React",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "Java",
      "Spring Boot",
      "JUnit",
      "PostgreSQL",
      "Docker",
      "AWS RDS",
      "Azure Cloud",
    ],
    github: "https://github.com/FinalScript/manage.sys",
    website: "https://manage-sys.web.app/",
    alttext: "Backend portion is currently down*",
  },
  {
    picture: magic8ballimg,
    title: "Front-End",
    name: "Magic 8 Ball",
    description:
      "Magical 8 ball which will react to touch inputs and provide the user with a prediction.",
    stack: ["React", "TailwindCSS", "Rive"],
    github: "https://github.com/moe1011/8Ball",
    website: "https://moe1011.github.io/8Ball",
    alttext: "",
  },
  {
    picture: calculatorimg,
    title: "Front-End",
    name: "Calculator App",
    description:
      "A calculator app made for simple calculations, with keyboard shortcuts and an ability to save all your calculations to a text file.",
    stack: ["React", "Electron", "TailwindCSS", "MathJS"],
    github: "https://github.com/moe1011/CalculatorApp",
    website: "",
    alttext: "",
  },
  {
    picture: wantodoimg,
    title: "Front-End",
    name: "WanTo-Do",
    description:
      "Simple to-do list created with react, with to-do tasks that persist in local storage.",
    stack: ["React"],
    github: "https://github.com/moe1011/wantodo",
    website: "https://wanto-do.netlify.app",
    alttext: "",
  },
];

export function Projects() {
  return (
    <div className="flex flex-wrap justify-center mt-7 select-none">
      {projectArray.map((proj) => {
        return (
          <div
            className=" w-[22rem] sm:w-card sm:hover: mx-10 mb-7 h-auto flex flex-col bg-slate-200 text-slate-900 bg-opacity-30 
            rounded-xl shadow-lg GlassBG transition-all ease-in-out duration-300 hover:-translate-y-5 hover:shadow-xl"
            key={proj.name}
          >
            <img
              className="object-cover rounded-t-xl h-72"
              src={proj.picture}
            />
            <div className="p-2 px-4 flex flex-1 flex-col justify-between space-y-1">
              <div>
                <h3 className="tracking-wider text-sm font-medium title-font">
                  {proj.title}
                </h3>
                <h2 className="text-3xl text-gray-900 font-medium title-font">
                  {proj.name}
                </h2>
                <p className="leading-relaxed text-sm pb-2">
                  {proj.description}
                </p>
                <div>
                  <div className="w-full border-t border-slate-600 border-2 rounded-lg"></div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap justify-center pt-2 pb-4">
                  {proj.stack.map((tag) => {
                    return (
                      <p
                        className="leading-relaxed text-base font-normal p-1 px-3 mr-2 mt-2 rounded-3xl bg-slate-300 bg-opacity-80"
                        key={proj.name + tag}
                      >
                        {tag.trim()}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div>
                <div>
                  <div className="w-full border-t border-slate-600 border-2 rounded-lg"></div>
                </div>
                <div className="pt-4 pb-2 flex justify-center space-x-10 transition-all">
                  <a href={proj.github} rel="noreferrer" target="_blank">
                    <img
                      src={codecolor}
                      className="transition-all duration-200 grayscale contrast-200 hover:grayscale-0 hover:contrast-100"
                    />
                  </a>
                  
                  {proj.website &&
                    <a href={proj.website} rel="noreferrer" target="_blank">
                    <img
                      src={sitecolor}
                      className="transition-all duration-200 grayscale contrast-200 hover:grayscale-0 hover:contrast-100"
                    />
                  </a>}
                </div>
              </div>
              <span className="alt-text text-sm text-gray-600">
                {proj.alttext}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
