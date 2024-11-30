import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
export default function Topnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Hello</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#personalStatement">Personal Statement</Nav.Link>
            <Nav.Link href="#personalStatement">Resume</Nav.Link>
            <NavDropdown title="Program Outcomes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#artifact1">
                Health Science Knowledge & Skills
              </NavDropdown.Item>
              <NavDropdown.Item href="#artifact2">
                Leadership & Systems Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#artifact3">
                Information Technology
              </NavDropdown.Item>
              <NavDropdown.Item href="#artifact4">
                Systems Design & Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#artifact5">
                Data & Knowledge Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#artifact6">
                Data & Knowledge Management
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
