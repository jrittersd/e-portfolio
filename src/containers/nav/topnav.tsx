import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
export default function Topnav() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ paddingLeft: "20px" }}>
          E-Portfolio
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#personalStatement">Personal Statement</Nav.Link>
            <Nav.Link href="#personalStatement">Resume</Nav.Link>
            <NavDropdown
              title="Program Outcomes"
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#healthSci">
                Health Science Knowledge & Skills
              </NavDropdown.Item>
              <NavDropdown.Item href="#leadership">
                Leadership & Systems Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#infoTech">
                Information Technology
              </NavDropdown.Item>
              <NavDropdown.Item href="#systemsDesignMgmt" className="ms-auto">
                Systems Design & Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#dataMgmt">
                Data & Knowledge Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#qualityReg">
                Quality & Regulatory
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
