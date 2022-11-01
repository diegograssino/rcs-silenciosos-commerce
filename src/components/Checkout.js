import React, { useState } from 'react';
import {
  Container,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import validator from 'validator';

const Checkout = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  const [
    firstValidationName,
    setFirstValidationName,
  ] = useState(true);

  const [
    firstValidationMail,
    setFirstValidationMail,
  ] = useState(true);

  const [
    firstValidationPhone,
    setFirstValidationPhone,
  ] = useState(true);

  const validateName = n => {
    return (
      validator.matches(n, '^[a-zA-Z ]*$') &&
      validator.isLength(n, {
        min: 5,
        max: 36,
      })
    );
  };

  const validateMail = m => {
    return (
      validator.isEmail(m) &&
      validator.isLength(m, {
        min: 5,
        max: 36,
      })
    );
  };

  const validatePhone = p => {
    return (
      validator.isNumeric(p) &&
      validator.isLength(p, {
        min: 10,
        max: 10,
      })
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      name: name,
      mail: mail,
      phone: phone,
      cart: { q: 1, products: ['1', 'Remera'] },
    });
  };

  return (
    <Container className="my-3">
      <Card className="mb-3">
        <Card.Header>Mi Carrito</Card.Header>
        <Card.Body>
          <h2>Detalle del carrito</h2>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          Datos del comprador
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Nombre completo
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Roberto Sanchez"
                onInput={e =>
                  setName(e.target.value)
                }
                onBlur={() =>
                  setFirstValidationName(false)
                }
              />
              {!validateName(name) &&
                !firstValidationName && (
                  <Form.Text className="text-danger">
                    Ingrese su nombre y apellido.
                  </Form.Text>
                )}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="mail"
                placeholder="sandro@gmail.com"
                onInput={e =>
                  setMail(e.target.value)
                }
                onBlur={() =>
                  setFirstValidationMail(false)
                }
              />
              {!validateMail(mail) &&
                !firstValidationMail && (
                  <Form.Text className="text-danger">
                    Ingrese su mail.
                  </Form.Text>
                )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="3814999999"
                onInput={e =>
                  setPhone(e.target.value)
                }
                onBlur={() =>
                  setFirstValidationPhone(false)
                }
              />
              {!validatePhone(phone) &&
                !firstValidationPhone && (
                  <Form.Text className="text-danger">
                    Ingrese su numero de telefono.
                  </Form.Text>
                )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Acepto los terminos y condiciones."
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Ir a pagar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Checkout;
