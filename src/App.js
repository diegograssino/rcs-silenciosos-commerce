import 'bootstrap/dist/css/bootstrap.min.css';
import './css/globals.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  // CART
  // Solo se utiliza para debugear si todo esta bien
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const add = p => {
    setCart([...cart, p]);
  };

  const del = p => {
    setCart(cart.filter(c => c.id !== p.id));
  };

  const mod = p => {
    console.log(p);
  };

  const totalQ = () => {
    let q = 0;

    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      q = q + element.q;
    }

    return q;
  };

  const clear = () => {
    console.log('clear');
  };

  return (
    <BrowserRouter>
      <Main
        cart={cart}
        add={add}
        totalQ={totalQ}
        del={del}
      />
    </BrowserRouter>
  );
}

export default App;
