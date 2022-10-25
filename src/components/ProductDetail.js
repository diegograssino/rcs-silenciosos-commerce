import React, { useState } from 'react';
import {
  Card,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const ProductDetail = ({ data }) => {
  const [counter, setCounter] = useState(1);
  return (
    <Container className="pt-4">
      <Card className="border-0">
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={data.image}
            />
          </Col>
          <Col>
            <Container>
              <Card.Title>
                {data.title}
              </Card.Title>
              <Card.Text as="h2">
                ${data.price}
              </Card.Text>
              <Container className="d-flex justify-content-between">
                <Counter
                  counter={counter}
                  setter={setCounter}
                />
                <Link to="/checkout">
                  <Button variant="success">
                    Comprar
                  </Button>
                </Link>
              </Container>
            </Container>
          </Col>
        </Row>
        <Card.Body>
          <Card.Text>
            {data.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
