import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar className={style.navbar} expand="sm" collapseOnSelect>
      <Container className={style.left}>
        <Navbar.Brand href="#home" className={style.logo}>
          Brand link
        </Navbar.Brand>
      </Container>
      <Container className={style.right}>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className={style.navlinks}>
            <Nav.Link href="#speaker" className={style.link}>
              About Us
            </Nav.Link>
            <Nav.Link href="#speaker" className={style.link}>
              Why Attend
            </Nav.Link>
            <Nav.Link href="#speaker" className={style.link}>
              Sponsors
            </Nav.Link>
            <Nav.Link href="#speaker" className={style.link}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="#speaker" className={style.link}>
              Login
            </Nav.Link>
            <Nav.Link href="#speaker" className={style.link}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
