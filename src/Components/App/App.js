import "./App.css";
import { Nav } from "../Nav/Nav";
import { Projects } from "../Projects/Projects";
import backgroundArtSVG from "../../images/RectLight.png";
import { ContactForm } from "./ContactForm";
import Rive from "@rive-app/react-canvas";
import { useRive } from "@rive-app/react-canvas";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "riv1.riv",
    artboard: "Initials Art",
    animations: "Write Initials",
    autoplay: true,
  });

  return (
    <div className="bg-white relative overflow-x-hidden overflow-y-hidden select-none">
      <div className="relative">
        {/* <div className="straight-line sm:left-4"></div>
        <div className="straight-line sm:left-28"></div> */}
        <div className="fixed sm:-left-8">
          <Rive
            src="riv1.riv"
            artboard="Trains"
            animations="Train Movement"
            className="h-0 sm:h-screen w-screen sm:w-72"
          />
        </div>
        <div className="fixed right-0 h-screen ">
          <img className="h-full object-contain" src={backgroundArtSVG} />
        </div>
      </div>

      <Nav />

      <section
        className="flex flex-column justify-center items-center h-screen ShowHome"
        id="home"
      >
        <div className="text-center flex justify-center items-center">
          <div className="font-light ">
            <p className="text-3xl sm:text-4xl mt-20">Hello, I'm</p>
            <p className="text-5xl sm:text-6xl mt-3 select-text">
              Mohammed Abdulla
            </p>
            <p className="text-3xl sm:text-4xl mt-5">
              a Software Engineer
            </p>
            <RiveComponent
              className="h-72 w-72 block m-auto"
              // onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
            />
          </div>
        </div>
      </section>

      <section
        className="w-full flex justify-center select-none pb-5"
        id="projects"
      >
        <div className="container flex flex-col w-full h-auto text-center text-4xl bg-gradient-to-br from-sky-500 to-blue-600 bg- rounded-xl shadow-md relative">
          <div className="w-full flex flex-col items-center pt-7">
            <h1 className="font-semibold text-slate-50 pb-2">PROJECTS</h1>

            <Projects />
            <div className="pt-8 text-slate-50" id="contact">
              CONTACT
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="text-light text-center p-3 mt-auto">
        <h5 style={{ fontWeight: "300", margin: "0" }}>
          © Mohammed Abdulla {new Date().getFullYear()}{" "}
        </h5>
      </div>
    </div>
  );
}

export default App;
