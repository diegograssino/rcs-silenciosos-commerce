import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ d }) => {
  return (
    <Card className="p-0">
      <Card.Img
        variant="top"
        src={d.image}
        className="p-3"
      />
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
      </Card.Body>
      <Card.Footer>${d.price}</Card.Footer>
      <Card.Footer>
        <Link to={`/product/${d.id}`}>
          <Button>Ir al producto</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Product;
