import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Products from "./Products";
import styled from "styled-components";

export default class PrdouctsList extends Component {
  render() {
    return (
      <ProductsAll>
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return (
                <div>
                  {product.category === `${value.cateogryP}` ? (
                    <Products
                      key={product.id}
                      pro={product}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            });
          }}
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
