import React from "react";
import "./Projects.css"

const projectArray = [
  {
    picture: "",
    title: "Full-Stack Web App",
    name: "Manage.sys",
    description: "",
    stack: [],
  },
  {
    picture: "",
    title: "Front-End",
    name: "WanTo-Do",
    description: "",
    stack: [],
  },
];

export function Projects() {
  return (
    <div className="flex space-x-10">
      <div className=" px-10 h-auto flex justify-center bg-slate-200 text-slate-900 bg-opacity-30 bg-clip-padding rounded-md shadow-lg GlassBG ">
        <div className="">
          Project 1
        </div>
      </div>
      {/* <div className="w-full px-36 h-auto flex justify-center  bg-slate-200 text-slate-900 bg-opacity-30 bg-clip-padding rounded-md shadow-lg GlassBG ">
        <div className="">
          Hello
        </div>
      </div> */}
    </div>
  );
}
