import Education from "./Components/Education";
import Topbar from "./Components/Topbar";
import { studentdetails, StudentContactInfo } from "./Data/StudentDetails";
import degree from "../src/Data/Education";
import Projects from "./Components/Projects";
import projects from "./Data/Projects";
import InternOrTraining from "./Components/InternOrTraining";
import trainorinter from "./Data/InternOrTraining";
import Skills from "./Components/Skills";
import skills from "./Data/Skills";
import SpokenandWritten from "./Components/SpokenandWritten";

function App() {
  return (
    <>
      <Topbar {...studentdetails} {...StudentContactInfo} />
      <Education degree={degree} />
      <InternOrTraining data={trainorinter} />
      <Projects project={projects} />
      <Skills {...skills} />
      <SpokenandWritten />
      <div className="flex">
        <button
          className="outline-none text-center px-10 py-1 text-white rounded bg-gray-700 hover:bg-gray-500 m-1"
          onClick={() => {
            window.close();
          }}
        >
          Close
        </button>
        <button
          className="outline-none textcenter px-10 py-1 text-white rounded bg-gray-700 hover:bg-gray-500 m-1"
          onClick={() => {
            window.print();
          }}
        >
          Print this Resume
        </button>
      </div>
    </>
  );
}

export default App;
