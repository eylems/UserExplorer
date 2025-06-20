import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Container>
        <div className="text-center">
          <h1 
            className="display-4 fw-bold mb-4"
            style={{
              background: 'linear-gradient(45deg, #007bff, #6610f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Welcome to UserExplorer! 👋
          </h1>
          <p className="lead text-muted">
            Start exploring users
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;