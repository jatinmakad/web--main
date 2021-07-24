import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class CategoryFilter extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => {
              return (
                <div>
                  <div className="filter_currency">
                    <select
                      className="dropdown"

                    >
                      <option value="clothes" >clothes</option>
                      <option value="tech">tech</option>

                    </select>
                  </div>
                </div>
              );
            }}
          </ProductConsumer>
        )
    }
}
