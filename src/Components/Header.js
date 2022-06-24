import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar className="Nav">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="/crypto.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default Header;
