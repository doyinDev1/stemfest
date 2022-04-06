import React, { useState } from "react";
// import { Button, Navbar, Container } from "react-bootstrap";

import { Nav, Navbar, Container } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar
      className="navigation__Landing !absolute  mt-[20px]"
      expand="sm"
      collapseOnSelect
    >
      <Container className="text-white min-w-[95vw]">
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="mx-auto relative z-10">
            <Nav.Link
              href="#speaker"
              className="mx-5 text-white font-bold text-[22px] px-0"
            >
              Speakers
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="mx-5 text-white font-bold text-[22px] px-0 "
            >
              Agenda
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="mx-5 text-white font-bold text-[22px]"
            >
              Sponsor
            </Nav.Link>
            <Nav.Link
              href="#contact-us"
              className="mx-5 text-white font-bold text-[22px] relative z-10"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className=" mx-auto relative z-10">
            <Nav.Link
              href="/adult-login"
              className="mx-5 text-white font-bold text-[22px] px-0"
            >
              Login
            </Nav.Link>
            <Nav.Link
              href="/register"
              className="mx-5 text-white font-bold text-[22px] px-4 rounded-[10px] bg-yellow"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
