// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import PageHeader from "../components/pageHeader";
// Containers
// import AboutMe from "../containers/aboutMe";
import TextBoxContainer from "../containers/textBoxContainer";
import ExperienceContainer from "../containers/experienceContainer";
import EducationContainer from "../containers/educationContainer";
import SkillsContainer from "../containers/skillsContainer";
// Data
import {
  aboutMeContent,
  experienceContent,
  educationContent,
  skillsContent,
} from "../data/resumeContent";
import { appTitle } from "../data/pageTitles";

const aboutMeColor = "#e2e7ef" as const;
const experienceColor = "#f2f0e8" as const;
const educationColor = "#e8f0e0" as const;
// Output
export default function Resume() {
  return (
    <>
      <PageHeader title="Resume" subtitle={appTitle} />
      <Container fluid style={{ height: "100%" }}>
        <Row>
          <TextBoxContainer
            outerBackground={aboutMeColor}
            title="About Me"
            text={aboutMeContent}
            downloadUrl="/e-portfolio/assets/usd.png"
            btnText="DOWNLOAD RESUME"
          />
        </Row>
        <Row>
          <Col md={3}>
            <SkillsContainer skills={skillsContent} />
          </Col>
          <Col md={9}>
            <ExperienceContainer
              jobs={experienceContent}
              outerBackground={experienceColor}
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
