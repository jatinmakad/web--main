import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDis from "./pages/ProductDIs";
import Home from "./pages/Home";
import Header from "./pages/Header";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Router>
            <Header />
            <Switch>
              <Route path="/products/:id" component={ProductDis} />
              <Route path="/cart" component={Cart} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
