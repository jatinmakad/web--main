import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Plus from "../Images/plus-square.svg";
import Minus from "../Images/minus-square.svg";
import Right_icon from "../Images/chevron-right.svg";
import Left from "../Images/left.svg";
import styled from "styled-components";

const CartMain = styled.div`
  width: 1350px;
  margin: 0 auto;
  height: 100%;
`;
const CartHeading = styled.h1`
  padding: 40px 0;
  width: 90%;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;
const CartHead = styled.div`
  display: flex;
  width: 90%;
  height: 180px;
  padding: 30px 0;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;
const CartLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartName = styled.p`
  font-size: 30px;
  font-weight: 600;
  line-height: 1px;
  margin-bottom: 25px;
`;
const CartAttributes = styled.div`
  margin-bottom: 30px;
`;
const CartPriceSection = styled.div`
  font-size: 24px;
  font-wight: 600;
  line-height: 0.1px;
`;
const CartPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  padding-right: 6px;
  font-weight: 600;
`;
const CartRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const CartCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  height: 100%;
  justify-content: space-between;
`;
const CartImage = styled.div`
  position: relative;
`;
const CartTotal = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  font-weight: 300;
  font-size: 30px;
  line-height: 0.1px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 80px;
`;
export default class Cart extends Component {
  render() {
    return (
      <CartMain>
        <CartHeading>Cart</CartHeading>
        <ProductConsumer>
          {(value) => {
            return (
              <div>
                {value.cart.map((g, index) => (
                  <CartHead key={g.id}>
                    <CartLeft>
                      <CartName key={g.name}>{g.name}</CartName>
                      <CartAttributes key={g.attribut}>
                        {g.attribut.map((q) => (
                          <div key={q.att_id}>
                            <p
                              style={{
                                marginBottom: "2px",
                                paddingBottom: "4px",
                                fontWeight: "600",
                              }}
                              key={q.att_id}
                            >
                              {q.att_id} :
                            </p>
                            <button
                              style={{
                                background: q.att_value,
                                color: q.att_value,
                                border: "1px solid black",
                                padding: "4px",
                                marginBottom: "3px",
                              }}
                              key={q.att_value}
                            >
                              {q.att_value}
                            </button>
                          </div>
                        ))}
                      </CartAttributes>

                      <CartPriceSection>
                        {g.prices?.map((j) => (
                          <div key={j.currency}>
                            {j.currency === `${value.curr}` ? (
                              <CartPrice key={j.currency}>
                                {j.currency === `${value.curr}`}
                                {new Intl.NumberFormat("en-au" | "ru-md", {
                                  style: "currency",
                                  currency: `${value.curr}`,
                                }).format(`${j.amount.toFixed(2)}`)}
                              </CartPrice>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </CartPriceSection>
                    </CartLeft>

                    <CartRight>
                      <CartCount>
                        <img
                          src={Plus}
                          alt=""
                          onClick={() => value.inc(index)}
                        />
                        <p style={{ fontSize: "20px" }}>{g.count}</p>
                        <img
                          src={Minus}
                          alt=""
                          onClick={
                            g.count <= 1
                              ? () => value.rem(index)
                              : () => value.dec(index)
                          }
                        />
                      </CartCount>
                      <CartImage>
                        <img
                          src={Left}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "43%",
                            left: "0",
                          }}
                          onClick={() => value.ProductImageDec(index)}
                        />
                        {g.gallery[`${g.co}`] ? (
                          <img
                            src={g.gallery[`${g.co}`]}
                            alt=""
                            style={{
                              width: "140px",
                              height: "200px",
                              objectFit: "contain",
                              marginBottom: "15px",
                            }}
                          />
                        ) : (
                          <img
                            src={g.gallery[0]}
                            alt=""
                            style={{
                              width: "140px",
                              height: "200px",
                              objectFit: "contain",
                              marginBottom: "15px",
                            }}
                          />
                        )}

                        <img
                          src={Right_icon}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "43%",
                            left: "80%",
                          }}
                          onClick={() => value.ProductImageInc(index)}
                        />
                      </CartImage>
                    </CartRight>
                  </CartHead>
                ))}
                <CartTotal>
                  <div>
                   
                    {value.cart.length === 0 ? (
                      ""
                    ) : (
                      <p style={{ fontWeight: "600" }}>Total</p>
                    )}
                  </div>

                  <div>
                    {value.cart.map((h) => (
                      <div key={h.prices}>
                        {h.prices.map((y) => (
                          <div key={y.currency}>
                            {y.currency === `${value.curr}` ? (
                              <p
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                key={y.currency}
                              >
                                {y.currency === `${value.curr}`}
                                {new Intl.NumberFormat("en-au" | "ru-md", {
                                  style: "currency",
                                  currency: `${value.curr}`,
                                }).format(`${value.tot.toFixed(2)}`)}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CartTotal>
              </div>
            );
          }}
        </ProductConsumer>
      </CartMain>
    );
  }
}
