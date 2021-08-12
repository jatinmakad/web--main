import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDescription from "./pages/ProductDescription";
import Home from "./pages/Home";
import Header from "./pages/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <HashRouter>
          <Router>
            <Header />
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/products/:id" component={ProductDescription} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
          </HashRouter>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
