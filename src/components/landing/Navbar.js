import React, { useState } from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar
      className="navigation__Landing !text-black  mt-[20px]"
      expand="sm"
      collapseOnSelect
    >
      <Container className="text-white min-w-[95vw]">
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="mx-auto relative z-10">
            <Nav.Link
              href="#speaker"
              className="mx-5  font-bold text-[22px] px-0"
            >
              Speakers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
