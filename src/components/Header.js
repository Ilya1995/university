import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" className="d-inline-block align-top logo" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Аттестация</Nav.Link>
            <Nav.Link href="#features">Стипендия</Nav.Link>
            <Nav.Link href="#pricing">Сессия</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export {Header};
