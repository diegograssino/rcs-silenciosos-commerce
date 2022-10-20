import 'bootstrap/dist/css/bootstrap.min.css';
import './css/globals.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';

function App() {
  // Zona JS
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
