import React, { Component } from "react";
import ProductList from "./PrdouctsList";
import Title from "./Title";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomePage>
        <Title />
        <ProductList />
      </HomePage>
    );
  }
}
const HomePage = styled.div`
 padding:30px 0;
`;

