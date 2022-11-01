import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import Checkout from '../components/Checkout';
import Login from '../components/Login';

import { Container } from 'react-bootstrap';
import ProductListContainer from '../components/ProductListContainer';
import ProductDetailContainer from '../components/ProductDetailContainer.js';
import { Route, Routes } from 'react-router-dom';

const Main = ({ cart, add }) => {
  return (
    <>
      <Container
        fluid
        className="px-0 d-flex flex-column min-vh-100"
      >
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<ProductListContainer />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetailContainer add={add} />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
