import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src="university/logo.png" className="d-inline-block align-top logo" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/attestation">
              Аттестация
            </Link>
            <Link className="nav-link" to="/scholarship">
              Стипендия
            </Link>
            <Link className="nav-link" to="/session">
              Сессия
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export {Header};
