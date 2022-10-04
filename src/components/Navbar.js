import React from 'react';
import Container from 'react-bootstrap/Container';
import BSNavbar from 'react-bootstrap/Navbar';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <BSNavbar.Brand href="#home">
          <img
            alt=""
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Silenciosos Commerce
        </BSNavbar.Brand>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
