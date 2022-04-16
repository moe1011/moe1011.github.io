import "./App.css";
import { Nav } from "../Nav/Nav";
import { Projects } from "../Projects/Projects";
import projectBgImage from "../App/images/Mojave15.jpg";

function App() {
  return (
    <div className="bg-slate-100">
      <Nav />
      <section
        className="flex flex-column justify-center items-center h-screen ShowHome"
        id="home"
      >
        <div className="text-5xl text-center flex justify-center items-center">
          <div className="space-y-5">
            <p className="">Mohammed Abdulla,</p>
            <p>a Software Engineering student</p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center" id="projects">
        <div className="container flex flex-col w-full text-center text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-md p-5 relative">
          <img src={projectBgImage} className=" opacity-70" />
          <div className="absolute">
            <Projects />
          </div>
          <h1>PROJECTS</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
