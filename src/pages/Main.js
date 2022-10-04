import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
  const callback = () => {
    console.log('Soy un callback!');
  };

  return (
    <>
      <Container
        fluid
        className="px-0 d-flex flex-column min-vh-100"
      >
        <Navbar />
        <Landing
          prop="Esto es una prop"
          roberto="Esto tambien es una prop"
          numero={1}
          funcion={callback}
        />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
