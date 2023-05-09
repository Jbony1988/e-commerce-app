import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">

          <Navbar.Brand>
            <img src={logo} alt="logo" />
            E-commerce Application
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-center">
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
              </Nav.Link>
              <Nav.Link href="/cart">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
