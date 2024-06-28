import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BiLinkExternal, BiGitRepoForked } from "react-icons/bi"; // Importing Icons8 icons
import { Carousel } from "react-responsive-carousel"; // Importing Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing Carousel styles
import "./Projects.css";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1.",
      githubLink: "https://github.com/your-repo",
      images: [
        "/path-to-image1.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
      ],
      details: "Detailed information about Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2.",
      githubLink: "https://github.com/your-repo",
      images: [
        "/path-to-image1.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
      ],
      details: "Detailed information about Project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3.",
      githubLink: "https://github.com/your-repo",
      images: [
        "/path-to-image1.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
      ],
      details: "Detailed information about Project 3.",
    },
  ];

  // Function to handle opening the expanded project
  const handleExpandProject = (project) => {
    setExpandedProject(project);
  };

  // Function to handle closing the expanded project
  const handleCloseExpand = () => {
    setExpandedProject(null);
  };

  return (
    <main className="my-5">
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <Row>
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <Card className="mb-4 project-card">
                <Card.Img
                  variant="top"
                  src={project.images[0]}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="button-group">
                    <Button
                      variant="primary"
                      onClick={() => handleExpandProject(project)}
                      className="mr-2"
                    >
                      See More <BiLinkExternal />
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button"
                    >
                      GitHub <BiGitRepoForked />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Expanded Project Modal */}
      {expandedProject && (
        <div className="expanded-project-modal">
          <div className="expanded-project-content">
            <Button
              variant="light"
              className="close-btn"
              onClick={handleCloseExpand}
            >
              &times;
            </Button>
            <h2>{expandedProject.title}</h2>
            <Carousel showThumbs={false} showArrows={true}>
              {expandedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Project ${expandedProject.id} Image ${index}`}
                  />
                </div>
              ))}
            </Carousel>
            <p>{expandedProject.details}</p>
            <Button
              variant="outline-secondary"
              href={expandedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              GitHub <BiGitRepoForked />
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
