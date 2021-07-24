import React, { Component } from "react";
import { gql } from "apollo-boost";
import { request } from "graphql-request";

const DATA_USER = gql`
  {
    category {
      products {
        id
        name
        gallery
        description
        category
        prices {
          currency
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
    currencies
  }
`;

const ProductContext = React.createContext();
class ProductProvdier extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartItems: [],
      cart: [],
      curr: "USD",
      modal: false,
      total: 0,
      cat:"",
      cateogryP: "clothes",
      
    };
  }
  openModel = (status) => {
    console.log("open");
    this.setState({ modal: status });
  };
  closeModel = () => {
    console.log("close");
    this.setState({
      modal: false,
    });
  };
  con = () => {
    request("http://localhost:4000/", DATA_USER).then((data) =>
      this.setState({
        products: data.category.products,
      })
    );
  };
  componentDidMount() {
    this.con();
  }
  details = (id) => {
    const cartItem = this.getItem(id);
    this.setState(() => {
      return { cartItems: cartItem };
    });
  };
  getItem = (id) => {
    const products = this.state.products.find((item) => item.id === id);
    return products;
  };
  addToCart = (products) => {
    const cart = this.state.cart.slice();
    let alreadyInCart = false;
    cart.forEach((item) => {
      if (item.id === products.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cart.push({ ...products, count: 1 });
    }
    this.setState({ cart });
    this.addTotal(cart)
  };
  remove = (products) => {
    const cart = this.state.cart.slice();
    this.setState({ cart: cart.filter((x) => x.id !== products.id) });
  };

  decrement = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x) =>
        x.id === products.id ? { x, count: x.count-- } : x
      ),
    });
  };
  increment = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x) =>
        x.id === products.id ? { x, count: x.count++ } : x
      ),
    });
  };

  filterCurrency = (event) => {
    console.log(event.target.value);
    this.setState({
      curr: event.target.value,
    });
  };
  addTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      item.prices.forEach((j) => {
           if(j.currency === `${this.state.curr}`){
             total = total+(j.amount * item.count)
           }
      });
    });
    console.log(total,"total");

  };

  render() {
    console.log(this.state.cart, "cart");
    // console.log(this.addTotal, "total");
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          detail: this.details,
          cartt: this.addToCart,
          rem: this.remove,
          dec: this.decrement,
          inc: this.increment,
          fil: this.filterCurrency,
          open: this.openModel,
          close: this.closeModel,
          tot:this.addTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvdier, ProductConsumer };
