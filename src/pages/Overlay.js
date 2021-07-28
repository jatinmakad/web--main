import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import OutsideClick from "../OutsideClick/OutsideClick";

export default class Overlay extends Component {
  render() {
    const { children, open } = this.props;
    if (!open) return null;
    return (
      <div
        style={{
          position: "fixed",
          top: "12.9%",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,.8)",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "12.9%",
            left: "70%",
            backgroundColor: "#fff",
            padding: "30px",
            zIndex: "1000",
            width: "300px",
            maxHeight: "500px",
           overflowY:"auto",
          }}
        >
          <ProductConsumer>
            {(value) => {
              return (
                <OutsideClick clo={value.close}>
                  <div>{children}</div>
                </OutsideClick>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
