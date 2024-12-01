import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageHeader from "../components/pageHeader";
import ImageContainer from "../components/imageContainer";

import image from "../assets/headshot.jpg";
import BlurbContainer from "../containers/blurbContainer";

const imgDimensions = {
  height: "100%",
  width: "100%",
};
const blurbDimensions = {
  height: "100%",
  width: "100%",
};

export default function Home() {
  return (
    <>
      <PageHeader
        title="Health Care Informatics E-Portfolio"
        subtitle="James S. Ritter | Class of 2024"
      />
      <Container fluid style={{ height: "100%" }}>
        <Row>
          <Col md={3}>
            <ImageContainer imgUrl={`${image}`} dimensions={imgDimensions} />
          </Col>
          <Col md={9}>
            <BlurbContainer
              background="#dddddd"
              outerDimensions={blurbDimensions}
              text="Currently looking for a meaningful quote"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
