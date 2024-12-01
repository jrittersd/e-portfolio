//Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//Containers
import PageHeader from "../components/pageHeader";
import TextBoxContainer from "../containers/textBoxContainer";

//Content
import {
  pageTitle,
  personalStatementContent,
} from "../data/personalStatementContent";

import { appTitle } from "../data/pageTitles";

const boxColor = "#f2f0e8";

export default function PersonalStatement() {
  return (
    <>
      <PageHeader title={pageTitle} subtitle={appTitle} />
      <Container fluid>
        <Col md={12}>
          <TextBoxContainer
            outerBackground={boxColor}
            text={personalStatementContent}
            title="Reflections"
          />
        </Col>
      </Container>
    </>
  );
}
