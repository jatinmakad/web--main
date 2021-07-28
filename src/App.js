import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import ProductDis from "./Pages/ProductDIs";
import Home from "./Pages/Home";
import Header from "./Pages/Header";

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
