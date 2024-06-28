// src/components/Home.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaFilePdf } from "react-icons/fa"; // Import GitHub and PDF icons
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Home.css"; // Import custom CSS for additional styling

const Home = () => {
  return (
    <main className="bg-light text-center py-5">
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="home-heading">Welcome to My Portfolio</h1>
            <p className="lead">
              I am a passionate Software Engineer specializing in Web
              Development, dedicated to crafting clean and efficient code.
            </p>
            <Row className="justify-content-center mt-5">
              <Col xs="auto" className="mb-3">
                <Button
                  variant="primary"
                  as={Link}
                  to="/projects"
                  className="btn-animated"
                >
                  See Projects
                </Button>
              </Col>
              <Col xs="auto" className="mb-3">
                <Button
                  variant="secondary"
                  href="/path-to-your-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animated"
                >
                  <FaFilePdf className="mr-1" /> View CV
                </Button>
              </Col>
              <Col xs="auto" className="mb-3">
                <Button
                  variant="dark"
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animated"
                >
                  <FaGithub className="mr-1" /> GitHub
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
