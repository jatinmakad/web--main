import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import "./ProductDis.css";
import styled from "styled-components";

export default class ProductDIs extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <Product_disc>
              <Product_left>
                <Product_left_imgs>
                  <Multi src={value.cartItems.gallery[1]} alt="" />
                  <Multi src={value.cartItems.gallery[2]} alt="" />
                  <Multi src={value.cartItems.gallery[3]} alt="" />
                  <Multi src={value.cartItems.gallery[4]} alt="" />
                </Product_left_imgs>
                <Product_left_main
                  src={value.cartItems.gallery[0]}
                  alt=""
                  className="left_img"
                />
              </Product_left>
              <Product_right>
                <Product_name>{value.cartItems.name}</Product_name>
                <p>
                  {value.cartItems.attributes.map((g) => {
                    return (
                      <div>
                        <p
                          key={g.id}
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            lineHeight: "18px",
                          }}
                        >
                          {g.name}:
                        </p>
                        <p style={{ display: "flex" }}>
                          {g.items.map((h) => {
                            return (
                              <button
                                style={{
                                  width: "63px",
                                  height: "45px",
                                  marginRight: "20px",
                                  padding: "5px 7px",
                                  background: "transparent",
                                  border: "1px solid black",
                                  fontSize: "16px",
                                }}
                              >
                                {h.value}
                              </button>
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
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "18px",
                    }}
                  >
                    Prices
                  </p>
                  {value.cartItems.prices.map((j) => {
                    return (
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "18px",
                        }}
                      >
                        {j.currency === `${value.curr}` ? (
                          <p>
                            {j.currency === `${value.curr}`}
                            {j.currency}:{j.amount}
                          </p>
                        ) : (
                          ""
                        )}
                      </p>
                    );
                  })}
                </div>
                <Add_to_cart onClick={() => value.cartt(value.cartItems)}>
                  Add to Cart
                </Add_to_cart>
                <p>{value.cartItems.description}</p>
              </Product_right>
            </Product_disc>
          );
        }}
      </ProductConsumer>
    );
  }
}

const Product_disc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Product_left = styled.div`
  display: flex;
  flex: 0.55;
  padding: 20px 30px;
  height: 80vh;
`;
const Product_left_imgs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Multi = styled.img`
  height: 90px;
  width: 120px;
  padding-bottom: 10px;
  object-fit: contain;
`;
const Product_left_main = styled.img`
  width: 65%;
  object-fit: contain;
`;
const Product_right = styled.div`
  flex: 0.45;
`;
const Product_name = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;
const Add_to_cart = styled.button`
  height: 52px;
  width: 292px;
  border: none;
  padding: 16px, 32px, 16px, 32px;
  background-color: #5ece7b;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
`;
// const Product_disc = styled.div``;
