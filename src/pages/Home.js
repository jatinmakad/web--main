import React, { Component } from "react";
import ProductList from "./PrdouctsList";
import Title from "./Title";

export default class Home extends Component {
  render() {
    return (
      <>
        <Title />
        <ProductList />
      </>
    );
  }
}
