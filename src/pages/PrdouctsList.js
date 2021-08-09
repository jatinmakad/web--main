import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Products from "./Products";
import styled from "styled-components";


export default class PrdouctsList extends Component {
  render() {
    return (
      <ProductsAll>
        <ProductConsumer>
          {(value) =>
            value.products.map((product) =>
              product.category === `${value.cateogryP}` ? (
                <Products key={product.id} pro={product} />
              ) : value.cateogryP === "all" ? (
                <Products key={product.id} pro={product} />
              ) : (
                ""
              )
            )
          }
        </ProductConsumer>
        
      </ProductsAll>
    );
  }
}
const ProductsAll = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
