// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css"; // Import custom CSS for additional styling

const Projects = () => {
  return (
    <Container fluid className="my-5">
      <h1 className="text-center mb-5">Projects</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4 project-card">
            <Card.Img
              variant="top"
              src="/path-to-project-image.jpg"
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                Description of the project with links to the GitHub repository.
              </Card.Text>
              <Card.Link
                href="https://github.com/your-repo"
                className="card-link"
              >
                GitHub
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 project-card">
            <Card.Img
              variant="top"
              src="/path-to-project-image.jpg"
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Description of the project with links to the GitHub repository.
              </Card.Text>
              <Card.Link
                href="https://github.com/your-repo"
                className="card-link"
              >
                GitHub
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 project-card">
            <Card.Img
              variant="top"
              src="/path-to-project-image.jpg"
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Description of the project with links to the GitHub repository.
              </Card.Text>
              <Card.Link
                href="https://github.com/your-repo"
                className="card-link"
              >
                GitHub
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
