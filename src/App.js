import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Earphone from "./pages/Earphone";
import Headphone from "./pages/Headphone";
import Speaker from "./pages/Speaker";
import Home from "./pages/Home";
import Earr from "../src/Model/Earr";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/earphone/earphones">
                    <Earr/>
                 </Route>
          <Route path="/headphone">
           <Headphone/>
          </Route>
          <Route path="/earphone">
            <Earphone/>
          </Route>
          <Route path="/speaker">
            <Speaker />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
