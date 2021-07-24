import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Products from "./Products";
import styled from "styled-components";

export default class PrdouctsList extends Component {
  render() {
    return (
      <Products_all>
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return (
                <div>
                  <Products key={product.id} pro={product} />
                </div>
              );
            });
          }}
        </ProductConsumer>
      </Products_all>
    );
  }
}
const Products_all = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
