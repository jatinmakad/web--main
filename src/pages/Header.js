import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Cart_icon from "../Images/Empty Cart.svg";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Home from "../Images/main_logo.svg";

export default class Header extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <Head_main>
              <Main>
                <Header_first></Header_first>
                <Link to="/">
                  <img src={Home} alt="" />
                </Link>
                <Header_last>
                  <Filter />
                  <Link to="/cart">
                    <Head_last_icon>
                      <img src={Cart_icon} alt="" />
                      {value.cart.length === 0 ? (
                        ""
                      ) : (
                        <p
                          style={{
                            position: "absolute",
                            top: "-110%",
                            left: "90%",
                            background: "black",
                            color: "white",
                            borderRadius: "50%",
                            padding: ".5px 4px",
                            fontSize: "12px",
                          }}
                        >
                          {value.cart.length}
                        </p>
                      )}
                    </Head_last_icon>
                  </Link>
                </Header_last>
              </Main>
            </Head_main>
          );
        }}
      </ProductConsumer>
    );
  }
}
const Head_main = styled.div`
  width: 1440px;
  height: 90px;
`;
const Head_last_icon = styled.div`
  display: flex;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
const Header_first = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  font-size: 18px;
  font-weight: 600;
`;
const Header_last = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
`;
