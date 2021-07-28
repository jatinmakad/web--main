import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Plus from "../Images/plus-square.svg";
import Minus from "../Images/minus-square.svg";
import getSymbolFromCurrency from "currency-symbol-map";

export default class Cart extends Component {
  render() {
    return (
      <div
        style={{
          width: "1300px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            paddingBottom: "35px",
            width: "90%",
            fontSize: "40px",
            fontWeight: "700",
            letterSpacing: "5px",
            textTransform: "uppercase",
            borderBottom: "1px solid black",
          }}
        >
          Cart
        </h1>

        <ProductConsumer>
          {(value) => {
            const money = value.tot;
            return (
              <div>
                <p>
                  {value.cart.map((g) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          width: "90%",
                          justifyContent: "space-between",
                          marginBottom: "40px",
                          borderBottom: "1px solid black",
                          paddingBottom: "20px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: "30px",
                              fontWeight: "600",
                              lineHeight: "1px",
                            }}
                          >
                            {g.name}
                          </p>
                          <div>
                            <p>
                              {g.attributes.map((c) => {
                                return (
                                  <div>
                                    <p>
                                      {c.items.map((y) => {
                                        return (
                                          <div>
                                            {value.attribut.map((x) => {
                                              return (
                                                <div>
                                                  {c.id === x.att_id &&
                                                  y.displayValue ===
                                                    x.att_value ? (
                                                    <p
                                                      style={{
                                                        fontSize: "17px",
                                                        fontWeight: "600",
                                                        paddingBottom: "8px",
                                                        margin: "0",
                                                      }}
                                                    >
                                                      {c.id} :{""}
                                                      <button
                                                        style={{
                                                          margin: "0",
                                                          marginLeft: "10px",
                                                          width: "55px",
                                                          height: "27px",
                                                          fontWeight: "600",
                                                          fontSize: "12px",
                                                          background:
                                                            x.att_value,
                                                          color: x.att_value,
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        {y.value === x.att_id2
                                                          ? x.att_id2
                                                          : x.att_value}
                                                      </button>
                                                    </p>
                                                  ) : (
                                                    ""
                                                  )}
                                                </div>
                                              );
                                            })}
                                          </div>
                                        );
                                      })}
                                    </p>
                                  </div>
                                );
                              })}
                            </p>
                          </div>

                          <p
                            style={{
                              fontSize: "22px",
                              fontWeight: "500",
                              lineHeight: "1px",
                            }}
                          >
                            {g.prices?.map((j) => {
                              const mo = j.amount * g.count;
                              return (
                                <div>
                                  <p>
                                    {j.currency === `${value.curr}` ? (
                                      <p
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <p
                                          style={{
                                            paddingRight: "6px",
                                            margin: "1px",
                                          }}
                                        >
                                          {j.currency === `${value.curr}`}
                                          {getSymbolFromCurrency(j.currency)}
                                        </p>

                                        {mo.toFixed(2)}
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </p>
                                </div>
                              );
                            })}
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "20px",
                            }}
                          >
                            <img
                              src={Plus}
                              alt=""
                              onClick={() => value.inc(g)}
                            />
                            <p>{g.count}</p>
                            <img
                              src={Minus}
                              alt=""
                              onClick={
                                g.count <= 1
                                  ? () => value.rem(g)
                                  : () => value.dec(g)
                              }
                            />
                          </div>
                          <img
                            src={g.gallery[0]}
                            alt=""
                            style={{
                              width: "140px",
                              height: "185px",
                              objectFit: "contain",
                              marginBottom: "15px",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div
                    style={{
                      display: "flex",
                      width: "90%",
                      justifyContent: "space-between",
                      fontWeight: "500",
                      fontSize: "28px",
                      lineHeight: "18px",
                      letterSpacing: "2px",
                    }}
                  >
                    {value.cart.length === 0 ? "" : <p>Total</p>}
                    <p>
                      {value.cart.length === 0 ? "" : <p>{money.toFixed(2)}</p>}
                    </p>
                  </div>
                </p>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}