import React, {
  useEffect,
  useState,
} from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, [data]);

  return (
    <>
      <Container
        fluid
        className="px-0 d-flex flex-column min-vh-100"
      >
        <Navbar />
        <Landing />
        <div>{data.title}</div>
        <div>{data.price}</div>
        <div>{data.description}</div>

        <Footer />
      </Container>
    </>
  );
};

export default Main;
