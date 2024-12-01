import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Navigation
import Topnav from "./containers/nav/topnav";
import Sidebar from "./containers/nav/sidebar";
import { sideBarLinks } from "./data/sidebarLinks";

//Body
//Base Pages
import Home from "./pages/home";
import PersonalStatement from "./pages/personalStatement";
import Resume from "./pages/resume";
//Artifacts
import HealthSci from "./pages/artifacts/healthSci";
import Leadership from "./pages/artifacts/leadership";
import InfoTech from "./pages/artifacts/infoTech";
import SystemsDesign from "./pages/artifacts/systemsDesign";
import DataMgmt from "./pages/artifacts/dataMgmt";
import QualityReg from "./pages/artifacts/qualityReg";

export default function App() {
  return (
    <>
      <Topnav />
      <Container
        className="col-md-12 col-lg-12"
        fluid
        style={{ minHeight: "100vh", padding: 0, margin: 0 }}
        //  flexDirection: "column", display: "flex" }}
      >
        <Row
          style={{
            minHeight: "100vh",
          }}
        >
          <Col
            md={2}
            lg={2}
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "stretch",
            }}
          >
            <Sidebar data={sideBarLinks} isOpen={true} />
          </Col>
          <Col
            md={10}
            lg={10}
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "stretch",
            }}
          >
            <Container fluid style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/personalStatement"
                  element={<PersonalStatement />}
                />
                <Route path="/resume" element={<Resume />} />
                <Route path="/healthSci" element={<HealthSci />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/infoTech" element={<InfoTech />} />
                <Route path="/systemsDesignMgmt" element={<SystemsDesign />} />
                <Route path="/dataMgmt" element={<DataMgmt />} />
                <Route path="/qualityReg" element={<QualityReg />} />
              </Routes>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
