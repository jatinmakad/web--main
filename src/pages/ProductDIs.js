import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

export default class ProductDIs extends Component {
  constructor() {
    super();
    this.state = {
      color: ""
    };
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const regex = /(<([^>]+)>)/gi;
          const result = value.cartItems.description.replace(regex,"");
          const limit = 400;
          return (
            <ProductDisc>
              <ProductLeft>
                <ProductLeftimgs>
                  {value.cartItems.gallery[1] ? (
                    <Multi src={value.cartItems.gallery[1]} alt="" />
                  ) : (
                    ""
                  )}
                  {value.cartItems.gallery[2] ? (
                    <Multi src={value.cartItems.gallery[2]} alt="" />
                  ) : (
                    ""
                  )}
                  {value.cartItems.gallery[3] ? (
                    <Multi src={value.cartItems.gallery[3]} alt="" />
                  ) : (
                    ""
                  )}
                  {value.cartItems.gallery[4] ? (
                    <Multi src={value.cartItems.gallery[4]} alt="" />
                  ) : (
                    ""
                  )}
                </ProductLeftimgs>
                <ProductLeftmain
                  src={value.cartItems.gallery[0]}
                  alt=""
                  className="left_img"
                />
              </ProductLeft>
              <ProductRight>
                <ProductName>{value.cartItems.name}</ProductName>
                <p>
                  {value.cartItems.attributes.map((g) => {
                    return (
                      <div>
                        <p
                          key={g.id}
                          style={{
                            fontSize: "22px",
                            fontWeight: "800",
                            lineHeight: "18px",
                          }}
                        >
                          {g.name}
                        </p>
                        <p style={{ display: "flex" }}>
                          {g.items.map((h, i) => {
                            return (
                              <div>
                                <button
                                  style={{
                                    width: "63px",
                                    height: "45px",
                                    marginRight: "20px",
                                    padding: "5px 7px",
                                    background: "transparent",
                                    border: "1px solid black",
                                    fontSize: "20px",
                                    backgroundColor: h.value,
                                  }}
                                  onClick={() => {
                                    value.at(
                                      value.cartItems.id,
                                      g.id,
                                      h.displayValue,
                                      h.value
                                    );
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: h.value,
                                      fontSize: "14px",
                                      fontWeight: "600",
                                      color: h.value,
                                      display: "flex",
                                      justifyContent: "center"
                                    }}
                                  >
                                    {h.value}
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                        </p>
                      </div>
                    );
                  })}
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight:"800",
                      lineHeight: "18px",
                    }}
                  >
                    Prices 
                  </p>
                  {value.cartItems.prices.map((j) => {
                    return (
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          lineHeight: "18px"
                        }}
                      >
                        {j.currency === `${value.curr}` ? (
                          <p>
                            {j.currency === `${value.curr}`}
                            {getSymbolFromCurrency(j.currency)} {j.amount}
                          </p>
                        ) : (
                          ""
                        )}
                      </p>
                    );
                  })}
                </div>
                <AddTocart onClick={() => value.cartt(value.cartItems)}>
                  Add to Cart
                </AddTocart>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "25px",
                    width: "480px",
                    height: "150px"
                  }}
                >
                  {result.length > limit ? (
                    <div>{`${result.substring(0, limit)}...`}</div>
                  ) : (
                    <p>{result}</p>
                  )}
                </p>
              </ProductRight>
            </ProductDisc>
          );
        }}
      </ProductConsumer>
    );
  }
}
const ProductDisc = styled.div`
  display: flex;
  width: 92%;
  height: 100%;
  padding: 25px;
  margin-top:30px;
`;
const ProductLeft = styled.div`
  display: flex;
  flex: 0.75;
  padding: 10px 0;
  height: 80vh;
  width: 100%;
  justify-content: center;
`;
const ProductLeftimgs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Multi = styled.img`
  height: 90px;
  width: 120px;
  padding-bottom: 10px;
  object-fit: contain;
`;
const ProductLeftmain = styled.img`
  width: 80%;
  object-fit: contain;
`;
const ProductRight = styled.div`
  flex: 0.35;
  padding: 40px;
`;
const ProductName = styled.p`
  font-weight: 600;
  font-size: 35px;
  line-height: 30px;
  color: #1d1f22;
`;
const AddTocart = styled.button`
  height: 55px;
  width: 320px;
  border: none;
  padding: 16px, 32px, 16px, 32px;
  background-color: #5ece7b;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
