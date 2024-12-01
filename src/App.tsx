import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Navigation
import Topnav from "./containers/nav/topnav";
import Sidebar from "./containers/nav/sidebar";
import { sideBarLinks } from "./data/sidebarLinks";

import PageRoutes from "./pages/router";

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
              <PageRoutes />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
