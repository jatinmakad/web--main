import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
export default class Title extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return <Categoryes>{value.cateogryP}</Categoryes>;
        }}
      </ProductConsumer>
    );
  }
}
const Categoryes = styled.div`
  font-size: 42px;
  font-weight: 500;
  line-height: 67, 2px;
  text-transform: capitalize;
  letter-spacing: 5px;
  margin-top: 20px;
  margin-left: 60px;
`;
