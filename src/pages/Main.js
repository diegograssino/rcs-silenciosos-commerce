import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import ProductListContainer from '../components/ProductListContainer';

const Main = () => {
  return (
    <>
      <Container
        fluid
        className="px-0 d-flex flex-column min-vh-100"
      >
        <Navbar />
        <Landing />
        <ProductListContainer />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
