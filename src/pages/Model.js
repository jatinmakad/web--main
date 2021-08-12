import React, { Component } from "react";
import { ProductConsumer } from "../Context";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return <button onClick={() => value.close()} key={value}>close</button>;
        }}
      </ProductConsumer>
    );
  }
}
