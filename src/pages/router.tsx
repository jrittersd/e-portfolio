import { Routes, Route } from "react-router-dom";

//Body
//Base Pages
import Home from "./home";
import PersonalStatement from "./personalStatement";
import Resume from "./resume";
//Artifacts
import HealthSci from "./artifacts/healthSci";
import Leadership from "./artifacts/leadership";
import InfoTech from "./artifacts/infoTech";
import SystemsDesign from "./artifacts/systemsDesign";
import DataMgmt from "./artifacts/dataMgmt";
import QualityReg from "./artifacts/qualityReg";

export default function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personalStatement" element={<PersonalStatement />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/healthSci" element={<HealthSci />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/infoTech" element={<InfoTech />} />
        <Route path="/systemsDesignMgmt" element={<SystemsDesign />} />
        <Route path="/dataMgmt" element={<DataMgmt />} />
        <Route path="/qualityReg" element={<QualityReg />} />
      </Routes>
    </>
  );
}
