import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageHeader from "../components/pageHeader";

import {
  aboutMeContent,
  experienceContent,
  educationContent,
  skillsContent,
} from "../content/resumeContent";
import AboutMe from "../components/aboutMe";
import ExperienceContainer from "../containers/experienceContainer";
import EducationContainer from "../containers/educationContainer";
import SkillsContainer from "../containers/skillsContainer";

export default function Resume() {
  return (
    <>
      <PageHeader
        title="Health Care Informatics E-Portfolio"
        subtitle="Resume"
      />
      <Container fluid style={{ height: "100%" }}>
        <Row>
          <AboutMe text={aboutMeContent} />
        </Row>
        <Row>
          <Col md={3}>
            <SkillsContainer skills={skillsContent} />
          </Col>
          <Col md={9}>
            <ExperienceContainer jobs={experienceContent} />
            <EducationContainer schools={educationContent} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
