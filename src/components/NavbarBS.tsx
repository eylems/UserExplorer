import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

function NavbarBS () {
  const { favorites } = useStore();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites ({favorites.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarBS