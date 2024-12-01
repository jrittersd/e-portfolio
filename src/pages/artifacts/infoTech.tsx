//Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//Containers
import PageHeader from "../../components/pageHeader";
import ArtifactContainer from "../../containers/artifactContainer";
//Content
import { pageTitle, artifacts } from "../../data/itContent";
import { appTitle } from "../../data/pageTitles";

const boxColor = "#f2f0e8";

export default function InfoTech() {
  return (
    <>
      <PageHeader title={pageTitle} subtitle={appTitle} />
      <Container fluid>
        <Col md={12}>
          <ArtifactContainer outerBackground={boxColor} artifact={artifacts} />
        </Col>
      </Container>
    </>
  );
}
