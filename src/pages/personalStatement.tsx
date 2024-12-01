//Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//Containers
import PageHeader from "../components/pageHeader";
import TextBoxContainer from "../containers/textBoxContainer";

//Content
import { personalStatementContent } from "../content/personalStatementContent";

const textBoxDimensions = {
  height: "100",
  width: "100",
};

export default function PersonalStatement() {
  return (
    <>
      <PageHeader
        title="Health Care Informatics E-Portfolio"
        subtitle="Personal Statement"
      />
      <Container fluid>
        <Col md={12}>
          <TextBoxContainer
            // background="#ededed"
            outerBackground="#f2f0e9"
            outerDimensions={textBoxDimensions}
            text={personalStatementContent}
            title="Reflections"
          />
        </Col>
      </Container>
    </>
  );
}
