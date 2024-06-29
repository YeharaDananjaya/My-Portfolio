import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
              <Col xs="12" sm="6" lg="4" className="mb-3">
                <Card className="card-animated h-100">
                  <Card.Body>
                    <Card.Title>See Projects</Card.Title>
                    <Card.Text>
                      Explore my portfolio projects in detail.
                    </Card.Text>
                    <Button
                      variant="primary"
                      as={Link}
                      to="/projects"
                      className="btn-animated"
                    >
                      See Projects
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" sm="6" lg="4" className="mb-3">
                <Card className="card-animated h-100">
                  <Card.Body>
                    <Card.Title>View CV</Card.Title>
                    <Card.Text>
                      View my CV to learn more about my skills and experience.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="/path-to-your-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-animated"
                    >
                      <FaFilePdf className="mr-1" /> View CV
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" sm="6" lg="4" className="mb-3">
                <Card className="card-animated h-100">
                  <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    <Card.Text>
                      Visit my GitHub profile to see my latest projects.
                    </Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-animated"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
