import 'bootstrap/dist/css/bootstrap.min.css';
import './css/globals.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  // CART
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const add = p => {
    setCart([...cart, p]);
  };

  const del = p => {
    console.log(p);
  };

  const mod = p => {
    console.log(p);
  };

  const total = () => {
    console.log('total');
  };

  const clear = () => {
    console.log('clear');
  };

  return (
    <BrowserRouter>
      <Main cart={cart} add={add} />
    </BrowserRouter>
  );
}

export default App;
