import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import styles from "./styles/Home.module.css";
import finlandFlag from "./assets/images/fin.jpg";
import enFlag from "./assets/images/en.jpg";

import { useLanguage } from "./Context";

function NavBa() {
  const { changeLanguage } = useLanguage();

  return (
    <Navbar className={styles.navbarCustom} bg="primary" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className={styles.navLinkCustom} href="/">
            Home
          </Nav.Link>

          <Nav.Link className={styles.navLinkCustom} href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link className={styles.navLinkCustom} href="/blogs">
            Blog
          </Nav.Link>
          <Button
            variant="outline-success"
            onClick={() => changeLanguage("en")}
          >
            <img
              src={enFlag}
              alt="England"
              style={{ width: 24, height: 16, marginRight: 5 }}
            />
            EN
          </Button>
          <Button
            variant="outline-success"
            onClick={() => changeLanguage("fi")}
          >
            <img
              src={finlandFlag}
              alt="Suomi"
              style={{ width: 24, height: 16, marginRight: 5 }}
            />
            FI
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/blogs">Blogs</Link>
    //     </li>{" "}
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>{" "}
    //     <li>
    //       <button onClick={() => changeLanguage("en")}>EN</button>
    //     </li>{" "}
    //     <li>
    //       <button onClick={() => changeLanguage("fi")}>FI</button>
    //     </li>{" "}
    //   </ul>{" "}
    // </nav>
  );
}
export default NavBa;
