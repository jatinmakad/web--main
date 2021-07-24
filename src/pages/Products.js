import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Cart_icon from "../Images/Common.svg";

export default class Products extends Component {
  render() {
    const { id, name, prices, gallery } =
      this.props.pro;
    return (
      <ProductMain>
        <ProductWrapper>
          <ProductConsumer>
            {(value) => {
              return (
                <Productt onClick={() => value.detail(id)}>
                  <Link to="/products/">
                    <ProductImg img src={gallery[0]} alt="hello" />
                  </Link>

                  <Cart_ic
                    img
                    src={Cart_icon}
                    alt=""
                    onClick={() => value.cartt(this.props.pro)}
                  />

                  <ProductName>{name}</ProductName>
                  <Product_price>
                    {prices.map((j) => {
                      return (
                        <div>
                          <p>
                            {j.currency === `${value.curr}` ? (
                              <p>
                                {j.currency === `${value.curr}`}
                                {j.currency}:{j.amount}
                              </p>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </Product_price>
                </Productt>
              );
            }}
          </ProductConsumer>
        </ProductWrapper>
      </ProductMain>
    );
  }
}

const ProductMain = styled.div`
  margin: 50px auto;
  width: 70%;
`;
const Productt = styled.div``;
const Cart_ic = styled.img`
  position: absolute;
  top: 72%;
  left: 80%;
  width: 52px;
  height: 52px;
  display: none;
`;

const ProductWrapper = styled.div`
  position: relative;
  padding: 20px 30px;
  margin-right: 20px;
  margin-bottom: 70px;
  display: flex;
  padding-bottom: 20px;
  width: 386px;
  height: 444px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${Cart_ic} {
      display: block;
    }
  }
`;
const ProductImg = styled.img`
  width: 356px;
  height: 338px;
  object-fit: contain;
`;
const ProductName = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 28.8px;
`;
const Product_price = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  color: #1d1f22;
`;
