// src/components/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css"; // Import custom CSS for additional styling

const Home = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-4">Welcome to My Portfolio</h1>
            <p className="lead">
              I am a Software Engineer specialized in Web Development.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
