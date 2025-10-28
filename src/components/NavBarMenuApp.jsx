import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBarMenuApp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">Moja Aplikacja</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/lab01">Laboratorium 1</Nav.Link>
            <Nav.Link as={NavLink} to="/lab02">Laboratorium 2</Nav.Link>
            <Nav.Link as={NavLink} to="/lab3">Laboratorium 3</Nav.Link>
            <Nav.Link as={NavLink} to="/lab4">Laboratorium 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarMenuApp;