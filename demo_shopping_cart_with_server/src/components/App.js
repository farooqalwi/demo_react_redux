import '../App.css';
import Home from './Home';
import Cart from './Cart';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">Go to Cart</Link>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* old code */}
      {/* <OrderList shoppingItems={shoppingItems} /> */}
      {/* <Cart /> */}

    </div>
  );
}

export default App;
