import React, { Component } from "react";
import { ProductConsumer } from "../Context";

export default class Title extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            return (
              <p
                style={{
                  fontSize: "42px",
                  fontWeight: "500",
                  lineHeight: "67,2px",
                  textTransform: "capitalize",
                  letterSpacing: "5px",
                  marginLeft: "80px",
                }}
              >
                {value.cateogryP}
              </p>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
