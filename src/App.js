import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDis from "./pages/ProductDIs";
import Home from "./pages/Home";
import Header from "./pages/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/products/:id" component={ProductDis} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
