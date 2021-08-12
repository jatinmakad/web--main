import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";

export default class ProductDIs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      nu: "",
    };
  }

  // preview image changer
  changeImage = (id) => [
    this.setState({
      image: id,
    }),
  ];

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          let regex = /(<([^>]+)>)/gi;
          let result = value.cartItems.description?.replace(regex, "");

          return (
            <ProductDisc>
              <ProductLeft>
                <ProductLeftimgs>
                  {value.cartItems.gallery && value.cartItems.gallery[1] ? (
                    <Multi
                      src={value.cartItems.gallery[1]}
                      alt=""
                      onClick={() => this.changeImage(1)}
                    />
                  ) : (
                    ""
                  )}

                  {value.cartItems.gallery && value.cartItems.gallery[2] ? (
                    <Multi
                      src={value.cartItems.gallery[2]}
                      alt=""
                      onClick={() => this.changeImage(2)}
                    />
                  ) : (
                    ""
                  )}
                  {value.cartItems.gallery && value.cartItems.gallery[3] ? (
                    <Multi
                      src={value.cartItems.gallery[3]}
                      alt=""
                      onClick={() => this.changeImage(3)}
                    />
                  ) : (
                    ""
                  )}
                  {value.cartItems.gallery && value.cartItems.gallery[4] ? (
                    <Multi
                      src={value.cartItems.gallery[4]}
                      alt=""
                      onClick={() => this.changeImage(4)}
                    />
                  ) : (
                    ""
                  )}
                </ProductLeftimgs>
                {value.cartItems.gallery ? (
                  <ProductLeftmain
                    src={value.cartItems.gallery[`${this.state.image}`]}
                    alt=""
                    className="left_img"
                  />
                ) : (
                  ""
                )}
              </ProductLeft>
              <ProductRight>
                <ProductName>{value.cartItems.name}</ProductName>

                <ProductAttributes>
                  {value.cartItems.attributes?.map((item) => (
                    <div key={item.id}>
                      <CategoryNames key={item.name}>
                        {item.name} :{" "}
                      </CategoryNames>
                      <Categorys key={item.items}>
                        {item.items?.map((h) => (
                          <CategoryButton
                            key={h.value}
                            style={{
                              border:
                                item.type === "swatch" &&
                                value.attribut[0]?.att_id === item.id &&
                                value.attribut[0]?.att_value === h.displayValue
                                  ? "5px solid black"
                                  : value.attribut[1]?.att_id === item.id &&
                                    value.attribut[1]?.att_value ===
                                      h.displayValue
                                  ? "5px solid black"
                                  : value.attribut[2]?.att_id === item.id &&
                                    value.attribut[2]?.att_value ===
                                      h.displayValue
                                  ? "5px solid black"
                                  : "1px solid #1D1F22",
                              color:
                                value.attribut[0]?.att_id === item.id &&
                                value.attribut[0]?.att_value === h.displayValue
                                  ? "#fff"
                                  : value.attribut[1]?.att_id === item.id &&
                                    value.attribut[1]?.att_value ===
                                      h.displayValue
                                  ? "#fff"
                                  : value.attribut[2]?.att_id === item.id &&
                                    value.attribut[2]?.att_value ===
                                      h.displayValue
                                  ? "#fff"
                                  : "black",

                              background:
                                item.type === "swatch"
                                  ? h.value
                                  : value.attribut[0]?.att_id === item.id &&
                                    value.attribut[0]?.att_value ===
                                      h.displayValue
                                  ? "black"
                                  : value.attribut[1]?.att_id === item.id &&
                                    value.attribut[1]?.att_value ===
                                      h.displayValue
                                  ? "black"
                                  : value.attribut[2]?.att_id === item.id &&
                                    value.attribut[2]?.att_value ===
                                      h.displayValue
                                  ? "black"
                                  : "white",
                            }}
                            onClick={() =>
                              value.NewAttribut(
                                value.cartItems.id,
                                item.id,
                                h.displayValue,
                                item.type
                              )
                            }
                          >
                            <CategoryButtonValue
                              style={{
                                color: h.value,
                              }}
                              key={h.value}
                            >
                              {h.value}
                            </CategoryButtonValue>
                          </CategoryButton>
                        ))}
                      </Categorys>
                    </div>
                  ))}
                </ProductAttributes>

                <ProductPrices>
                  <PrPrice>Prices : </PrPrice>
                  {value.cartItems.prices?.map((j) => (
                    <PrCurrency key={j.currency}>
                      {j.currency === `${value.curr}` ? (
                        <div>
                          {j.currency === `${value.curr}`}
                          {new Intl.NumberFormat("en-au" | "ru-md", {
                            style: "currency",
                            currency: `${value.curr}`,
                          }).format(`${j.amount}`)}
                        </div>
                      ) : (
                        ""
                      )}
                    </PrCurrency>
                  ))}
                </ProductPrices>

                <AddTocart
                  onClick={() => value.cartt(value.cartItems)}
                  style={{
                    pointerEvents: !value.attribut.length ? "none" : "",
                    cursor: !value.attribut.length ? "not-allowed" : "pointer",
                  }}
                >
                  Add to Cart
                </AddTocart>
                <PrDescription key={result}>{result}</PrDescription>
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
  margin-top: 30px;
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
  width: 74%;
  object-fit: contain;
`;
const ProductRight = styled.div`
  flex: 0.35;
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.p`
  font-weight: 600;
  font-size: 35px;
  line-height: 30px;
  color: #1d1f22;
  margin-bottom: 40px;
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
  margin-bottom: 20px;
`;
const CategoryNames = styled.p`
  font-size: 19px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 12px;
`;
const Categorys = styled.div`
  display: flex;
`;
const CategoryButton = styled.button`
  width: 63px;
  height: 45px;
  margin-bottom: 15px;
  margin-right: 20px;
  padding: 4px 5px;
  border: 1px solid black;
  font-size: 20px;
  cursor: pointer;
`;
const CategoryButtonValue = styled.p`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;
const ProductAttributes = styled.div`
  margin-bottom: 20px;
`;
const ProductPrices = styled.div`
  margin-bottom: 30px;
`;
const PrPrice = styled.p`
  font-size: 19px;
  font-weight: 800;
  line-height: 18px;
  margin-bottom: 15px;
`;
const PrCurrency = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 18px;
`;
const PrDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 160%;
  color: #1d1f22;
  width: 480px;
  height: 150px;
`;
