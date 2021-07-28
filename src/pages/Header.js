import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./Header.css";
import Cart_icon from "../Images/Empty Cart.svg";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Home from "../Images/main_logo.svg";
import Overlay from "./Overlay";
import Plus from "../Images/plus-square.svg";
import Minus from "../Images/minus-square.svg";
import getSymbolFromCurrency from "currency-symbol-map";

export default class Header extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const money = value.tot;
          return (
            <HeaderMain>
              <Head>
                <HeaderFirst>
                  <p
                    style={{
                      fontSize: "19px",
                      fontWeight: "600",
                      lineHeight: "20px",
                      cursor: "pointer",
                      letterSpacing: "1px",
                    }}
                    value={value.cateogryP}
                    onClick={() => value.clothes()}
                    className={
                      value.cateogryP === "clothes"
                        ? "active_class"
                        : "clothes_ct"
                    }
                  >
                    Clothes
                  </p>
                  <p
                    style={{
                      fontSize: "19px",
                      fontWeight: "600",
                      lineHeight: "20px",
                      cursor: "pointer",
                      letterSpacing: "1.5px",
                    }}
                    value={value.cateogryP}
                    onClick={() => value.tech()}
                    className={
                      value.cateogryP === "tech" ? "active_class_to" : "tech_ct"
                    }
                  >
                    Tech
                  </p>
                </HeaderFirst>
                <Link to="/">
                  <img src={Home} alt="" />
                </Link>
                <HeaderLast>
                  <Filter />
                  <HeadLasticon
                    onClick={
                      value.cart.length === 0
                        ? () => value.close()
                        : () => value.open()
                    }
                  >
                    <img
                      src={Cart_icon}
                      alt=""
                    />
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
                  </HeadLasticon>
                  <Overlay open={value.modal}>
                    <div>
                      <div>
                        <p
                          style={{
                            fontWeight: "700",
                          }}
                        >
                          My Bag,
                          <span
                            style={{
                              fontWeight: "300",
                            }}
                          >
                            {value.cart.length} items
                          </span>
                        </p>
                      </div>
                      <div>
                        {value.cart?.map((g) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                marginBottom: "15px",
                                borderBottom: "1px solid black",
                              }}
                            >
                              <div>
                                <p
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    lineHeight: "25px",
                                  }}
                                >
                                  {g.name}
                                </p>
                                <div> 
                                  <p style={{fontWeight:"600",fontSize:"13px"}}>
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
                                                          <p>
                                                            {c.id} :  {""}
                                                            <button
                                                              style={{
                                                                marginLeft:"3px",
                                                                padding:"2px",
                                                                width:"48px",
                                                                height:"20px",
                                                                fontSize:"11px",
                                                                background:
                                                                  x.att_value,
                                                                color:
                                                                  x.att_value,
                                                                border:
                                                                  "1px solid gray",
                                                              }}
                                                            >
                                                              {y.value ===
                                                              x.att_value
                                                                ? x.att_value
                                                                : x.att_id2}
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
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    lineHeight: "25px",
                                  }}
                                >
                                  {g.prices?.map((j) => {
                                    const mo = j.amount * g.count;
                                    return (
                                      <div>
                                        <p>
                                          {j.currency === `${value.curr}` ? (
                                            <p>
                                              {j.currency === `${value.curr}`}
                                              {getSymbolFromCurrency(
                                                j.currency
                                              )}
                                              :{mo.toFixed(2)}
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
                                    style={{
                                      width: "25px",
                                      height: "25px",
                                    }}
                                  />
                                  <p>{g.count}</p>
                                  <img
                                    src={Minus}
                                    alt=""
                                    style={{
                                      width: "25px",
                                      height: "25px",
                                    }}
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
                                    width: "105px",
                                    height: "130px",
                                    objectFit: "contain",
                                    marginBottom: "15px",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "1px",
                          alignItems:"center",
                        }}
                      >
                        <p>Total</p>
                        <p>
                          {value.cart.length === 0 ? (
                            <p>{(value.tot = 0)}</p>
                          ) : (
                            <p>{money.toFixed(2)}</p>
                          )}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link to="/cart">
                          <button
                            style={{
                              width: "140px",
                              height: "43px",
                              padding: "13px 32px",
                              textTransform: "uppercase",
                              backgroundColor: "transparent",
                              border: "1.6px solid black",
                              fontWeight: "600",
                              lineHeight: "17px",
                            }}
                            onClick={() => value.close()}
                          >
                            View Bag
                          </button>
                        </Link>
                        <button
                          style={{
                            width: "140px",
                            height: "43px",
                            padding: "10px 25px",
                            textTransform: "uppercase",
                            backgroundColor: "#5ECE7B",
                            border: "none",
                            color: "#fff",
                          }}
                        >
                          Check Out
                        </button>
                      </div>
                    </div>
                  </Overlay>
                </HeaderLast>
              </Head>
            </HeaderMain>
          );
        }}
      </ProductConsumer>
    );
  }
}
const HeaderMain = styled.div`
  width: 1330px;
  height: 90px;
  margin: 0 auto;
`;
const HeadLasticon = styled.div`
  display: flex;
  position: relative;
`;
const Head = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const HeaderFirst = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  font-size: 18px;
  font-weight: 600;
`;
const HeaderLast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;
