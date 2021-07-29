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
      currencies: [],
      cartItems: [],
      cart: [],
      curr: "USD",
      cateogryP: "clothes",
      modal: false,
      filterCurr: false,
      tot: 0,
      cat: "",
      attribut: [],
    };
  }
  dataFetching = () => {
    request("http://localhost:4000/", DATA_USER).then((data) =>
      this.setState({
        products: data.category.products,
        currencies: data.currencies,
      })
    );
  };
  componentDidMount() {
    this.dataFetching();
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
    this.addTotal(cart);
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
    this.addTotal(cart);
  };
  increment = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x) =>
        x.id === products.id ? { x, count: x.count++ } : x
      ),
    });
    this.addTotal(cart);
  };
  filter = (c) => {
    this.setState({
      curr: c,
    });
  };
  CatFilter = (event) => {
    this.setState({
      cateogryP: event.target.value,
    });
  };
  addTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      item.prices.forEach((j) => {
        if (j.currency === `${this.state.curr}`) {
          total = total + j.amount * item.count;
        }
        this.setState({ tot: total });
      });
    });
  };
  clothess = () => {
    this.setState({
      cateogryP: "clothes",
    });
  };
  techs = () => {
    this.setState({
      cateogryP: "tech",
    });
  };

  openModel = () => {
    this.setState(
      {
        modal: true,
      },
      () => {
        this.windowOffset = window.scrollY;
        document.body.setAttribute(
          "style",
          `position:fixed; top: -${this.windowOffset}px;left:0;right:0;`
        );
      }
    );
  };
  closeModel = () => {
    this.setState(
      {
        modal: false,
      },
      () => {
        document.body.setAttribute("style", "");
        window.scrollTo(0, this.windowOffset);
      }
    );
  };
  openCurr = () => {
    this.setState({
      filterCurr: true,
    });
  };
  closeCurr = () => {
    this.setState({
      filterCurr: false,
    });
  };
  att = (cart) => {
    cart.map((h) => {
      this.setState({
        attribut: h.attributes,
      });
    });
  };
  changin = (pr_id, att_id, att_value, att_id2) => {
    const obj = {
      pr_id: pr_id,
      att_id: att_id,
      att_value: att_value,
      att_id2: att_id2,
    };
    let items = [...this.state.attribut];
    for (let i = 0; i <= this.state.attribut.length; i++) {
      if (
        pr_id === this.state.attribut[i]?.pr_id &&
        att_id === this.state.attribut[i]?.att_id
      ) {
        let item = { ...items[i] };
        item.att_value = att_value;
        items[i] = item;
        this.setState({
          attribut: [...items],
        });
        break;
      } else {
        this.setState({
          attribut: [...this.state.attribut, obj],
        });
      }
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          detail: this.details,
          cartt: this.addToCart,
          rem: this.remove,
          dec: this.decrement,
          inc: this.increment,
          fil: this.filter,
          open: this.openModel,
          close: this.closeModel,
          catFil: this.CatFilter,
          clothes: this.clothess,
          tech: this.techs,
          at: this.changin,
          closeCurr: this.closeCurr,
          openCurr: this.openCurr,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvdier, ProductConsumer };
