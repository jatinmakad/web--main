import React, { Component } from "react";
import { ProductConsumer } from "../Context";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            return (
              <div>
                <p>{value.cart.length}</p>
                <p>
                  {value.cart?.map((g) => {
                    return (
                      <div>
                        <p>{g.name}</p>
                        <div>
                          <p>{g.count}</p>
                          <button onClick={() => value.dec(g)}>dec</button>

                          <p>
                            {g.prices?.map((j) => {
                              return (
                                <div>
                                  <p>
                                    {j.currency === `${value.curr}` ? (
                                      <p>
                                        {j.currency === `${value.curr}`}
                                        {j.currency}:{j.amount * g.count}
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </p>
                                </div>
                              );
                            })}
                          </p>
                          <button onClick={() => value.inc(g)}>inc</button>
                        </div>
                        <button onClick={() => value.rem(g)}>remove</button>
                      </div>
                    );
                  })}
                </p>
                <p>{value.total}</p>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
