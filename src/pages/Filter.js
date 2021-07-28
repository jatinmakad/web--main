import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Arrow from "../Images/arrow.svg";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import OutsideClick2 from "../OutsideClick/OutsideClick2";

export default class Filter extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <OutsideClick2 currClose={value.closeCurr}>
              <Dropdown>
                <DropdownBtn onClick={value.openCurr}>
                  {value.curr}{" "}
                  {value.filterCurr ? (
                    <img src={Arrow} alt="" />
                  ) : (
                    <img
                      src={Arrow}
                      alt=""
                      style={{
                        transform: "rotate(180deg)",
                      }}
                    />
                  )}
                </DropdownBtn>

                {value.filterCurr && (
                  <DropdownContent>
                    {value.currencies.map((g) => {
                      return (
                        <DropdownItem onClick={() => value.fil(g)}>
                          <p onClick={value.closeCurr}>
                            {getSymbolFromCurrency(g)} {g}
                          </p>
                        </DropdownItem>
                      );
                    })}
                  </DropdownContent>
                )}
              </Dropdown>
            </OutsideClick2>
          );
        }}
      </ProductConsumer>
    );
  }
}
const Dropdown = styled.div`
  width: 100px;
  position: relative;
`;
const DropdownBtn = styled.div`
  padding: 7px 14px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0);
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50%;
  justify-content: space-between;
`;
const DropdownItem = styled.div`
  cursor: pointer;
  transition: all 0.2s;
`;
const DropdownContent = styled.div`
  position: absolute;
  top: 130%;
  left: -10%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(133, 41, 41, 0.04);
  font-weight: 600;
  color: #333;
  width: 85%;
`;
