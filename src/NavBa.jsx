import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import styles from "./styles/Home.module.css";
import finlandFlag from "./assets/images/fin.jpg";
import enFlag from "./assets/images/en.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLanguage } from "./Context";

function NavBa() {
  const { changeLanguage } = useLanguage();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/blogs">Blog</Nav.Link>

            <Button
              variant="outline-success"
              onClick={() => changeLanguage("en")}
              style={{ padding: 0 }}
            >
              <img
                src={enFlag}
                alt="English flag"
                style={{ padding: 0, width: 24, height: 16, display: "flex" }}
              />
            </Button>
            <Button
              variant="outline-success"
              style={{ padding: 0 }}
              onClick={() => changeLanguage("fi")}
            >
              <img
                src={finlandFlag}
                alt="Suomi"
                style={{ width: 24, height: 16, padding: 0, display: "flex" }}
              />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBa;
