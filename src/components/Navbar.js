import React from 'react';
import {
  Container,
  Button,
} from 'react-bootstrap';
import BSNavbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <BSNavbar.Brand>
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Silenciosos Commerce
          </BSNavbar.Brand>
        </Link>
        <div>
          <Link to="/checkout">
            <Button variant="outline-success">
              Cart (1)
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="primary">
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
