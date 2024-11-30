import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Topnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          Hello
          {/* <Link to="/">Hello</Link> */}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
