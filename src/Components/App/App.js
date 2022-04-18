import "./App.css";
import { Nav } from "../Nav/Nav";
import { Projects } from "../Projects/Projects";
import projectBgImage from "../../images/Mojave15.jpg";
import backgroundArtSVG from "../../images/RectLight.png";

function App() {
  return (
    <div className="bg-slate-100 relative overflow-x-hidden select-none">
      <div className="relative">
        <div className="straight-line left-8"></div>
        <div className="straight-line left-28"></div>
        <div className="fixed right-0 h-screen">
          <img className="h-full object-contain" src={backgroundArtSVG}/>
        </div>
      </div>
     
      <Nav />
      <section
        className="flex flex-column justify-center items-center h-screen ShowHome"
        id="home"
      >
        <div className="text-center flex justify-center items-center">
          <div className="font-light">
            <p className="text-4xl">Hello, I'm</p>
            <p className="text-6xl mt-3 select-text">Mohammed Abdulla</p>
            <p className="text-4xl mt-5">a Software Engineering student</p>
          </div>
        </div>
      </section>

      <section
        className="w-full flex justify-center select-none pb-5"
        id="projects"
      >
        <div className="container flex flex-col w-full h-max text-center text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-md relative">
          <img src={projectBgImage} className="opacity-70 rounded-lg h-full" />

          <div className="w-full flex flex-col items-center absolute p-5">
            <h1 className="font-semibold text-slate-50 mix-blend-overlay">
              PROJECTS
            </h1>

            <Projects />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
