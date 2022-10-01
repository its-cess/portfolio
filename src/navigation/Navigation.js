import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./navigation.styles.scss";

export default function Navigation() {
  return (
    <Fragment>
      <Navbar className="nav-bar" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/portfolio" className="brand">
            Cecily Toro
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown title="Menu" menuVariant="dark">
                <NavDropdown.Item href="/about-me">About Me</NavDropdown.Item>
                <NavDropdown.Item href="/experience">
                  Work Experience
                </NavDropdown.Item>
                <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                <NavDropdown.Item href="/contact-me">
                  Contact Me
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
