import { CartProvider } from './context/CartProvider';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './containers/Home';
import Product from './containers/ProductPage';
import Cart from './containers/CartPage';


function App() {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
    
  );
}

export default App;
