// NavigationBar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify-icons/ion/home";
import userIcon from "@iconify-icons/ion/person";
import bookIcon from "@iconify-icons/ion/bookmark";
import mailIcon from "@iconify-icons/ion/mail";
import websiteIcon from "@iconify-icons/ion/earth";
import DateTimeDisplay from "./DateTimeDisplay";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Icon icon={websiteIcon} style={{ fontSize: "24px", color: "#fff" }} />
      </div>
      <Nav
        className="flex-column nav-links"
        variant="pills"
        defaultActiveKey="/"
      >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" eventKey="link-1" title="Home">
            <Icon icon={homeIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/about" eventKey="link-2" title="About">
            <Icon icon={userIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/projects"
            eventKey="link-3"
            title="Projects"
          >
            <Icon icon={bookIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/contact"
            eventKey="link-4"
            title="Contact"
          >
            <Icon icon={mailIcon} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <DateTimeDisplay /> {/* Add the DateTimeDisplay component here */}
    </div>
  );
};

export default NavigationBar;
