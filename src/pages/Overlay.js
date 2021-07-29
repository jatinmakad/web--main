import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import OutsideClick from "../OutsideClick/OutsideClick";
import Styled from "styled-components";
import styled from "styled-components";

export default class Overlay extends Component {
  render() {
    const { children, open } = this.props;
    if (!open) return null;
    return (
      <div
        style={{
          position: "fixed",
          top: "11.5%",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,.8)",
          zIndex: "1000",
        }}
      >
        <Fade
          style={{
            position: "fixed",
            top: "11.5%",
            left: "74%",
            backgroundColor: "#fff",
            padding: "30px",
            zIndex: "1000",
            width: "325px",
            maxHeight: "540px",
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
        </Fade>
      </div>
    );
  }
}

const Fade = styled.div`
&::-webkit-scrollbar {
  width: 1px;
  border: 1px solid black;
}
`;