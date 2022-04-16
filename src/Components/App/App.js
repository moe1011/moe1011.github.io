import "./App.css";
import { Nav } from "../Nav/Nav";

function App() {
  return (
    <div className="App bg-slate-400">
      <Nav />
      <section className="flex flex-column justify-center items-center p-5 h-screen ShowHome">
        <div className="text-5xl text-center flex justify-center items-center">
          <div className="space-y-5">
            <p className="">Mohammed Abdulla,</p>
            <p>a Software Engineering student</p>
          </div>
        </div>
      </section>

      <section>

      </section>
    </div>
  );
}

export default App;
