import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Cart_icon from "../Images/Common.svg";
import "./Header.css";

export default class Products extends Component {
  render() {
    const { id, name, prices, gallery, inStock } = this.props.pro;
    return (
      <ProductMain>
        <ProductWrapper className={inStock === true ? "" : "outofstock"}>
          <div className={inStock === true ? "" : "jat"}>
            <OutofProduct
              style={{
                display: inStock === true ? "none" : "block",
              }}
            >
              out of stock
            </OutofProduct>
          </div>
          <ProductConsumer>
            {(value) => (
              <Pr>
                <Link to={"products/" + id} style={{ textDecoration: "none" }}>
                  <Productt
                    onClick={() => value.ProductDetail(id)}
                    style={{ opacity: inStock === false ? ".5" : "" }}
                  >
                    <ProductImg img src={gallery[0]} alt="" />

                    <CartIc img src={Cart_icon} alt="" />
                    <ProductName key={name}>{name}</ProductName>
                    <ProductPrice>
                      {prices.map((j) => (
                        <div key={j.currency}>
                          {j.currency === `${value.curr}` ? (
                            <div key={j.currency}>
                              {j.currency === `${value.curr}`}
                              {new Intl.NumberFormat("en-au" | "ru-md", {
                                style: "currency",
                                currency: `${value.curr}`,
                              }).format(`${j.amount}`)}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </ProductPrice>
                  </Productt>
                </Link>
              </Pr>
            )}
          </ProductConsumer>
        </ProductWrapper>
      </ProductMain>
    );
  }
}

const OutofProduct = styled.p`
  position: absolute;
  top: 45%;
  left: 25%;
  color: #8d8f9a;
  font-size: 26px;
  letter-spacing: 1px;
  line-height: 160%;
  zindex: 10000;
  text-transform: uppercase;
`;
const Pr = styled.div`
  position: absolute;
`;
const ProductMain = styled.div`
  margin: 50px auto;
  max-width: 75%;
`;
const Productt = styled.div``;
const CartIc = styled.img`
  position: absolute;
  top: 75%;
  left: 85%;
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
  width: 375px;
  height: 430px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);
    ${CartIc} {
      display: block;
    }
  }
`;
const ProductImg = styled.img`
  width: 340px;
  height: 300px;
  object-fit: contain;
`;
const ProductName = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  color: black;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #1d1f22;
`;
