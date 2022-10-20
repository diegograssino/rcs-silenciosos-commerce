import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Counter from './Counter';

const Product = ({ d }) => {
  const [counter, setCounter] = useState(1);
  return (
    <Card className="p-0">
      <Card.Img variant="top" src={d.image} className="p-3" />
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
      </Card.Body>
      <Card.Footer>${d.price}</Card.Footer>
      <Card.Footer>
        <Button>Ir al producto</Button>
        <Counter counter={counter} setter={setCounter} />
      </Card.Footer>
    </Card>
  );
};

export default Product;
