// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import PageHeader from "../components/pageHeader";
// Containers
// import AboutMe from "../containers/aboutMe";
import ExperienceContainer from "../containers/experienceContainer";
import EducationContainer from "../containers/educationContainer";
import SkillsContainer from "../containers/skillsContainer";
// Data
import {
  experienceContent,
  educationContent,
  skillsContent,
  resumeUrl,
} from "../data/resumeContent";
import { appTitle } from "../data/pageTitles";

const experienceColor = "#f2f0e8" as const;
const educationColor = "#e8f0e0" as const;
// Output
export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" subtitle={appTitle} />
      <Container fluid style={{ height: "100%" as const }}>
        <Row>
          <Col md={3}>
            <SkillsContainer skills={skillsContent} />
          </Col>
          <Col md={9}>
            <ExperienceContainer
              jobs={experienceContent}
              outerBackground={experienceColor}
              downloadUrl={resumeUrl}
            />
            <EducationContainer
              schools={educationContent}
              outerBackground={educationColor}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
