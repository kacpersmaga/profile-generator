import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBarMenuApp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm w-100">
      <Navbar.Brand as={NavLink} to="/home" className="ms-3">
        Moja Aplikacja
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto ms-3">
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/lab01">Laboratorium 1</Nav.Link>
          <Nav.Link as={NavLink} to="/lab02">Laboratorium 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBarMenuApp;
