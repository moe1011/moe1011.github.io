import "./Nav.css";
import React from "react";
import { Link } from "react-scroll";
import resume from "../../files/Resume.pdf";

export function Nav() {
  return (
    <div className="relative">
      <header className="fixed w-full px-4 z-20">
        <nav className="max-w-sm flex justify-center space-x-5 py-2 mt-5 mx-auto font-semibold text-black text-2xl bg-white border-2 border-blue-700 rounded-xl shadow-md ShowNav select-none">
          <Link
            smooth
            duration={300}
            to="home"
            className="hover:text-blue-600 transition-all ease-in duration-200 hover:scale-110 cursor-pointer"
          >
            HOME
          </Link>
          <Link
            smooth
            duration={300}
            to="projects"
            className="hover:text-blue-600 transition-all ease-in duration-200 hover:scale-110 cursor-pointer"
          >
            PROJECTS
          </Link>
          <Link
            smooth
            duration={300}
            to="contact"
            className="hover:text-blue-600 transition-all ease-in duration-200 hover:scale-110 cursor-pointer"
          >
            CONTACT
          </Link>
        </nav>
      </header>

      <div className="flex fixed z-20 mr-28 mt-20 lg:mt-4 lg:right-0 MobileLinks">
        <div className="flex justify-end items-center space-x-5 py-2 px-3 bg-white border-2 border-blue-700 shadow-md rounded-xl ShowLinks">
          <p className=" text-blue-500 hover:text-blue-600 hover:scale-110 ease-in duration-200 cursor-pointer w-10">
            <a
              title="GitHub"
              href="https://github.com/moe1011"
              rel="noreferrer"
              target="_blank"
              className="text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </p>
          <p className="text-blue-500 hover:text-blue-600 hover:scale-110 ease-in duration-200 cursor-pointer w-10">
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/mohammed-s-abdulla/"
              rel="noreferrer"
              target="_blank"
              className="text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </p>
          <p className="text-blue-500 hover:text-blue-600 hover:scale-110 ease-in duration-200 cursor-pointer w-11">
            <a
              title="Contact"
              href="mailto:moe.a1011@gmail.com"
              className="text-success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          </p>
          <p className="text-white text-lg bg-blue-500 hover:bg-blue-600 hover:scale-110 ease-in duration-200 transition-all rounded-lg py-1 px-2">
            <a href={resume} target="_blank" title="Resume">
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
