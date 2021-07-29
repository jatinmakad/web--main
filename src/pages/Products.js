import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import Cart_icon from "../Images/Common.svg";
import getSymbolFromCurrency from "currency-symbol-map";
export default class Products extends Component {
  render() {
    const { id, name, prices, gallery } = this.props.pro;
    return (
      <ProductMain>
        <ProductWrapper>
          <ProductConsumer>
            {(value) => {
              return (
                <div>
                    <Link to={`/products/${id}`} style={{textDecoration:"none"}}>
                  <Productt onClick={() => value.detail(id)}>
                  
                      <ProductImg img src={gallery[0]} alt="hello" />
                    
                    <CartIc
                      img
                      src={Cart_icon}
                      alt=""
                    />
                    <ProductName>{name}</ProductName>
                    <ProductPrice>
                      {prices.map((j) => {
                        return (
                          <div>
                            {j.currency === `${value.curr}` ? (
                              <p>
                                {j.currency === `${value.curr}`}
                                {getSymbolFromCurrency(j.currency)} : {j.amount}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </ProductPrice>
                   </Productt>
                  </Link>
              </div>
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
  max-width: 75%;
`;
const Productt = styled.div`

`;
const CartIc = styled.img`
  position: absolute;
  top: 68%;
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
  width: 380px;
  height: 420px;
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
  color:black;
  margin-top:10px;
  margin-bottom:20px;
`;
const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #1d1f22;
`;
