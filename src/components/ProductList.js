import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Product from './Product';

const ProductList = props => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {props.data.map((d, i) => (
          <Product d={d} key={i} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
