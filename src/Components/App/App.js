import "./App.css";
import { Nav } from "../Nav/Nav";

function App() {
  return (
    <div className="bg-slate-500">
      <Nav />
      <section className="flex flex-column justify-center items-center h-screen ShowHome" id="home">
        <div className="text-5xl text-center flex justify-center items-center">
          <div className="space-y-5">
            <p className="">Mohammed Abdulla,</p>
            <p>a Software Engineering student</p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center" id="projects">
        <div className="max-w-7xl flex flex-col w-full text-center text-4xl bg-slate-300 rounded-xl shadow-md p-5">
          <h1>PROJECTS</h1>
          <div className="flex justify-center space-x-5">
            <div>PROJECT 1</div>
            <div>PROJECT 2</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
