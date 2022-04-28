import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

import logoIcon from "../../../images/assets/logo-2.png";

export default (props) => {
  return (
    <Navbar className={style.navbars} expand="sm" collapseOnSelect>
      <Container className={style.left}>
        <Navbar.Brand href="#home" className={style.logo}>
          <img src={logoIcon} className={style.logoIcon} />
        </Navbar.Brand>
      </Container>
      <Container className={style.right}>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className={style.navlinks}>
            <Nav.Link href="/" className={style.link}>
              About Us
            </Nav.Link>
            <Nav.Link href="/" className={style.link}>
              Why Attend
            </Nav.Link>
            <Nav.Link href="/" className={style.link}>
              Sponsors
            </Nav.Link>
            <Nav.Link href="/" className={style.link}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="/login" className={style.link}>
              Login
            </Nav.Link>
            <Nav.Link href="/register" className={style.link}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
