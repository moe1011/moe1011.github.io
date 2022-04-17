import React from "react";
import "./Projects.css";
import managesysimg from "../../images/managesys_fp.png";
import wantodoimg from "../../images/wantodo_fp.png";

const projectArray = [
  {
    picture: managesysimg,
    title: "Full-Stack Web App",
    name: "Manage.sys",
    description:
      "A store management system where users can create accounts, then do CRUD operations with employee data.",
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
  },
  {
    picture: wantodoimg,
    title: "Front-End",
    name: "WanTo-Do",
    description: "A simple to-do list created with react, with to-do tasks that persist in local storage.",
    stack: ["React"],
  },
];

export function Projects() {
  return (
    <div className="flex flex-wrap justify-center mt-7 select-none">
      {projectArray.map((proj) => {
        return (
          <div className=" w-card mx-10 mb-5 h-auto flex flex-col bg-slate-200 text-slate-900 bg-opacity-30 bg-clip-padding rounded-xl shadow-lg GlassBG transition-all hover:-translate-y-3">
            <img
              className="object-cover rounded-t-xl h-72"
              src={proj.picture}
            />
            <div className="p-2 px-3 flex flex-col space-y-1">
              <h3 className="tracking-wider text-sm font-medium title-font">
                {proj.title}
              </h3>
              <h2 className="text-3xl text-gray-900 font-medium title-font">
                {proj.name}
              </h2>
              <div className="divide-slate-600 divide-y-2">
                <p className="leading-relaxed text-sm pb-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap justify-center py-2">
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
