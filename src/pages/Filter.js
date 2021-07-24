import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Euro from "../Images/Euro.svg";
import Jpy from "../Images/JPY.svg";
import Curren from "../Images/currency_logo.svg";
import Label from "../Images/Label.svg";

export default class Filter extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div>
              <div className="filter_currency">
                <select
                  className="dropdown"
                  onChange={value.fil}
                  value={value.curr}
                >
                  <option value="USD" selected="selected">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="JPY">JPY</option>
                  <option value="RUB">RUB</option>
                </select>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
