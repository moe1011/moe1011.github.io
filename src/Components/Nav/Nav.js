import "./Nav.css";
import React from "react";

export function Nav() {
  return (
    <header className="fixed w-full transition-transform z-10">
      <nav className=" max-w-md flex justify-center space-x-5 pt-2 pb-2 mt-5 mx-auto font-semibold text-gray-900 text-2xl bg-slate-400 rounded-xl shadow-md ShowNav">
        <p className="hover:text-blue-600 ease-in duration-200 cursor-pointer">
          HOME
        </p>
        <p className="hover:text-blue-600 ease-in duration-200 cursor-pointer">
          PROJECTS
        </p>
        <p className="hover:text-blue-600 ease-in duration-200 cursor-pointer">
          CONTACT
        </p>
      </nav>
    </header>
  );
}
