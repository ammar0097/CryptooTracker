import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./crypto.png";


const Header = () => {
  return (
    <>
      <Navbar className="Nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Cryptoo
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
