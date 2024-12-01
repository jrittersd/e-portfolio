import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Navigation
import Topnav from "./containers/nav/topnav";
import Sidebar from "./containers/nav/sidebar";
import { sideBarLinks } from "./data/sidebarLinks";

import PageRoutes from "./pages/router";

import Copyright from "./components/copyright";

export default function App() {
  return (
    <>
      <Topnav />
      <Container
        fluid
        style={{
          minHeight: "100vh" as const,
          padding: 0,
          margin: 0,
        }}
      >
        <Row
          style={{
            minHeight: "100vh" as const,
          }}
        >
          <Col
            md={2}
            lg={2}
            style={{
              display: "flex" as const,
              flexDirection: "column" as const,
            }}
          >
            <Sidebar data={sideBarLinks} isOpen={true} />
          </Col>
          <Col
            md={10}
            lg={10}
            style={{
              display: "flex" as const,
              flexDirection: "column" as const,
            }}
          >
            <Container
              fluid
              style={{
                flex: 1,
                paddingBottom: "2em" as const,
                overflowY: "visible" as const,
              }}
            >
              <PageRoutes />
            </Container>

            <Container
              fluid
              style={{
                flex: 1,
                alignContent: "center" as const,
                justifyContent: "center" as const,
              }}
            >
              <Copyright />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
