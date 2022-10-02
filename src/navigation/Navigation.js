import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navigation.styles.scss";

export default function Navigation() {
  return (
    <Fragment>
      <Navbar className="nav-bar" expand="lg" variant="dark">
        <Container fluid>
          <div>
            <Navbar.Brand href="/portfolio" className="brand">
              Cecily Toro
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <Nav.Link href="/about-me">About Me</Nav.Link>
                <Nav.Link href="/experience">Work Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact-me">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}
