import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import ProductDis from "./Pages/ProductDIs";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductsList from "./Pages/PrdouctsList";
import Header from "./Pages/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path= "/products/" component={ProductDis} />
            <Route path="/" component={ProductsList} />
            {/* <Route component={Home} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
