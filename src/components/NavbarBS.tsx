import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store/store";

function NavbarBS() {
  const { favorites } = useStore();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar 
      expand="lg" 
      className="shadow-sm" 
      bg="dark" 
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold fs-3 text-primary"
          style={{
            textDecoration: 'none',
            background: 'linear-gradient(45deg, #007bff, #6610f2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          UserExplorer
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              className={`mx-2 px-3 py-2 rounded-pill transition-all ${
                isActive('/') ? 'bg-primary text-white' : 'text-light'
              }`}
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
            >
              🏠 Homepage
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/users"
              className={`mx-2 px-3 py-2 rounded-pill transition-all ${
                isActive('/users') ? 'bg-primary text-white' : 'text-light'
              }`}
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
            >
              👥 Users
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/favorites"
              className={`mx-2 px-3 py-2 rounded-pill transition-all position-relative ${
                isActive('/favorites') ? 'bg-primary text-white' : 'text-light'
              }`}
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
            >
              ❤️ Favorites
              {favorites.length > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="ms-1"
                  style={{
                    fontSize: '0.7rem',
                    animation: favorites.length > 0 ? 'pulse 2s infinite' : 'none'
                  }}
                >
                  {favorites.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          .navbar-nav .nav-link:hover {
            transform: translateY(-2px);
            background-color: rgba(0, 123, 255, 0.1) !important;
          }
          
          .transition-all {
            transition: all 0.3s ease !important;
          }
        `}
      </style>
    </Navbar>
  );
}

export default NavbarBS;