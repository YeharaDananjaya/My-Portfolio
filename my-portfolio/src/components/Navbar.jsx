// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify-icons/ion/home";
import userIcon from "@iconify-icons/ion/person";
import bookIcon from "@iconify-icons/ion/bookmark";
import mailIcon from "@iconify-icons/ion/mail";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-width-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav">
            <Nav.Link
              as={NavLink}
              to="/"
              exact
              title="Home"
              className="nav-link"
            >
              <Icon
                icon={homeIcon}
                className="icon"
                style={{ fontSize: "36px" }}
              />
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              title="About"
              className="nav-link"
            >
              <Icon
                icon={userIcon}
                className="icon"
                style={{ fontSize: "36px" }}
              />
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              title="Projects"
              className="nav-link"
            >
              <Icon
                icon={bookIcon}
                className="icon"
                style={{ fontSize: "36px" }}
              />
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              title="Contact"
              className="nav-link"
            >
              <Icon
                icon={mailIcon}
                className="icon"
                style={{ fontSize: "36px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
