import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";
import "./Header.css";
import Cart_icon from "../Images/Empty Cart.svg";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Home from "../Images/main_logo.svg";
import Overlay from "./Overlay";
import Plus from "../Images/plus-square.svg";
import Minus from "../Images/minus-square.svg";

export default class Header extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <HeaderMain>
            <Head>
              <HeaderFirst>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <CategoryAll
                    onClick={() => value.AllProductCategory()}
                    className={
                      value.cateogryP === "all" ? "active_cla" : "all_ct"
                    }
                  >
                    All
                  </CategoryAll>
                </NavLink>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <CategoryClothes
                    value={value.cateogryP}
                    onClick={() => value.clothes()}
                    className={
                      value.cateogryP === "clothes"
                        ? "active_class"
                        : "clothes_ct"
                    }
                  >
                    Clothes
                  </CategoryClothes>
                </NavLink>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <CategoryTech
                    value={value.cateogryP}
                    onClick={() => value.tech()}
                    className={
                      value.cateogryP === "tech" ? "active_class_to" : "tech_ct"
                    }
                  >
                    Tech
                  </CategoryTech>
                </NavLink>
              </HeaderFirst>
              <NavLink to="/">
                <img src={Home} alt="" />
              </NavLink>
              <HeaderLast>
                <Filter />
                <HeadLasticon
                  onClick={
                    value.cart.length === 0
                      ? () => value.close()
                      : () => value.open()
                  }
                >
                  <img src={Cart_icon} alt="" />
                  {value.cart.length === 0 ? (
                    ""
                  ) : (
                    <CartLength>{value.cart.length}</CartLength>
                  )}
                </HeadLasticon>
                <Overlay open={value.modal}>
                  <div>
                    <MyBag>
                      My Bag,
                      <span
                        style={{
                          fontWeight: "300",
                        }}
                      >
                        {value.cart.length} items
                      </span>
                    </MyBag>

                    <div>
                      {value.cart?.map((g, index) => (
                        <OverlayCart>
                          <OverlayCartFirst>
                            <OverlayCartName key={g.name}>
                              {g?.name}
                            </OverlayCartName>
                            <div>
                              {g.attribut.map((q) => (
                                <OverlayAtt key={q.att_id2}>
                                  <div style={{ marginBottom:"3px" }} key={q.att_id}>
                                    {q.att_id} :
                                  </div>
                                  <button
                                    style={{
                                      backgroundColor: q.att_value,
                                      color: q.att_value,
                                      border: "1px solid black",
                                      padding: "2px",
                                    }}
                                    key={q.att_value}
                                  >
                                    {q.att_value}
                                  </button>
                                </OverlayAtt>
                              ))}
                            </div>
                            <OverlayCurrency>
                              {g.prices?.map((j) => (
                                <div key={j.currency}>
                                  {j.currency === `${value.curr}` ? (
                                    <div key={j.currency}>
                                      {j.currency === `${value.curr}`}
                                      {new Intl.NumberFormat(
                                        "en-au" | "ru-md",
                                        {
                                          style: "currency",
                                          currency: `${value.curr}`,
                                        }
                                      ).format(`${j.amount.toFixed(2)}`)}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </OverlayCurrency>
                          </OverlayCartFirst>

                          <OverlayCountButton>
                            <OverlayCount>
                              <img
                                src={Plus}
                                alt=""
                                onClick={() => value.inc(index)}
                                style={{
                                  width: "25px",
                                  height: "25px",
                                }}
                              />
                              <p key={g.count}>{g.count}</p>
                              <img
                                src={Minus}
                                alt=""
                                style={{
                                  width: "25px",
                                  height: "25px",
                                }}
                                onClick={
                                  g.count <= 1
                                    ? () => value.rem(index)
                                    : () => value.dec(index)
                                }
                              />
                            </OverlayCount>
                            <OverlayPrImage src={g?.gallery[0]}></OverlayPrImage>
                          </OverlayCountButton>
                        </OverlayCart>
                      ))}
                    </div>
                    <OverlayPrTotal>
                      <div
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        Total
                      </div>
                      <Prrr>
                        {value.cart?.map((h) => (
                          <div key={h.name}>
                            {h.prices?.map((y) => (
                              <div key={y.currency}>
                                {y.currency === `${value.curr}` ? (
                                  <div>
                                    {y.currency === `${value.curr}`}
                                    {new Intl.NumberFormat("en-au" | "ru-md", {
                                      style: "currency",
                                      currency: `${value.curr}`,
                                    }).format(`${value.tot}`)}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </Prrr>
                    </OverlayPrTotal>
                    <OverlayBag>
                      <NavLink to="/cart">
                        <OverlayBagButton onClick={() => value.close()}>
                          View Bag
                        </OverlayBagButton>
                      </NavLink>
                      <OverlayBagButton2>Check Out</OverlayBagButton2>
                    </OverlayBag>
                  </div>
                </Overlay>
              </HeaderLast>
            </Head>
          </HeaderMain>
        )}
      </ProductConsumer>
    );
  }
}
const OverlayAtt = styled.div``;

const HeaderMain = styled.div`
  max-width: 1350px;
  height: 80px;
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
  width: 250px;
  font-size: 18px;
  font-weight: 600;
`;
const HeaderLast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;
const CategoryAll = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
const CategoryClothes = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const CategoryTech = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
const CartLength = styled.p`
  position: absolute;
  top: -35%;
  left: 70%;
  background: black;
  color: white;
  border-radius: 50%;
  padding: 0.5px 4px;
  font-size: 12px;
`;
const MyBag = styled.div`
  font-weight: 700;
  margin-bottom: 30px;
`;
const OverlayCart = styled.div`
  display: flex;
  width: 100%;
  height: 160px;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const OverlayCartFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const OverlayCartName = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
`;
const OverlayCurrency = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
`;
const OverlayCountButton = styled.div`
  display: flex;
`;
const OverlayCount = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;
const OverlayPrImage = styled.img`
  width: 105px;
  height: 130px;
  object-fit: contain;
  margin-bottom: 15px;
`;
const OverlayPrTotal = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  justify-content: space-between;
  font-weight: 300;
  font-size: 16px;
  line-height: 0.1px;
  align-items: center;
`;
const OverlayBag = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const OverlayBagButton = styled.button`
  width: 140px;
  height: 43px;
  padding: 13px 32px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1.6px solid black;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
`;
const OverlayBagButton2 = styled.button`
  width: 140px;
  height: 43px;
  padding: 10px 25px;
  text-transform: uppercase;
  background-color: #5ece7b;
  border: none;
  color: #fff;
`;
// const OverlayAttButton = styled.button`
// border:1px solid black;
// padding:2px;
// `;
const Prrr = styled.div``;
