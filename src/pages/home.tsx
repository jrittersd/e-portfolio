import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageHeader from "../components/pageHeader";
import ImageContainer from "../components/imageContainer";

import image from "../assets/headshot.jpg";
import BlurbContainer from "../containers/blurbContainer";

import { appTitle, secondaryTitle } from "../data/pageTitles";

const imgDimensions = {
  height: "100%",
  width: "100%",
};
const blurbDimensions = {
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
          <Col md={3}>
            <ImageContainer imgUrl={`${image}`} dimensions={imgDimensions} />
          </Col>
          <Col md={9}>
            <BlurbContainer
              background={boxColor}
              outerDimensions={blurbDimensions}
              text="Currently looking for a meaningful quote"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
