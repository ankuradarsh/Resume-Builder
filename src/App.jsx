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
    </>
  );
}

export default App;
