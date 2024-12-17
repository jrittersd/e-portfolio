import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageHeader from "../components/pageHeader";
import ImageContainer from "../components/imageContainer";

import image from "../assets/headshot.jpg";
import TextBoxContainer from "../containers/textBoxContainer";
import { aboutMeContent, profGoalsContent, courseContent } from "../data/homePageBiography";

import { appTitle, secondaryTitle } from "../data/pageTitles";

const imgDimensions = {
  height: "100%",
  width: "100%",
};


const boxColor = "#f2f0e8";

export default function Home() {
  return (
    <>
      <PageHeader title={appTitle} subtitle={secondaryTitle} />
      <Container fluid style={{ height: "100%" }}>
        <Row>
          <Col md={4}>
            <ImageContainer imgUrl={`${image}`} dimensions={imgDimensions} />
          </Col>
          <Col md={8}>
          <div>

            <TextBoxContainer
              outerBackground={boxColor}
              text={aboutMeContent}
              title="Executive Summary"
              />
            <TextBoxContainer
              outerBackground={boxColor}
              text={profGoalsContent}
              title="Professional Goals"
              />
            <TextBoxContainer
              outerBackground={boxColor}
              text={courseContent}
              title="Selected Coursework"
              />
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
