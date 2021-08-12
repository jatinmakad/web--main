import React, { Component } from "react";
import { gql } from "apollo-boost";
import { request } from "graphql-request";
import _ from "lodash";

const DATA_USER = gql`
  {
    category {
      products {
        id
        inStock
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
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currencies: [],
      cartItems: [],
      cart: [],
      curr: "USD",
      cateogryP: "all",
      modal: false,
      filterCurr: false,
      tot: 0,
      cat: "",
      attribut: [],
    };
  }
  componentDidUpdate() {
    request("http://localhost:4000/", DATA_USER).then((data) =>
      this.setState({
        products: data.category.products,
        currencies: data.currencies,
      })
    );
  }

  componentDidMount() {
    // window.addEventListener("popstate", () => {
    //   this.setState({
    //     attribut: [],

    //   });
    //   // localStorage.removeItem("cartItems");
    // });

    this.setState({
      cartItems: JSON.parse(localStorage.getItem("cartItems")),
    });
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("cartItems", JSON.stringify(nextState.cartItems));
  }
  // Particular Product id
  getItem = (id) => {
    const products = this.state.products.find((item) => item.id === id);
    return products;
  };
  // Product Description page
  ProductDetail = (id) => {
    const cartItem = this.getItem(id);
    this.setState(() => {
      return { cartItems: cartItem };
    });
  };
  // Add To cart
  addToCart = (products) => {
    let cart = this.state.cart.slice();
    let attribut = this.state.attribut.slice();
    let alreadyInCart = false;
    cart.forEach((item) => {
      this.state.attribut.every((z) => {
        item.attribut.filter((a) => {
          if (_.isEqual(z, a)) {
            alreadyInCart = true;
            item.count++;
            this.setState({ attribut: [] });
          }
        });
      });
    });
    if (!alreadyInCart) {
      cart.push({ ...products, count: 1, co: 1, attribut }) &&
        this.setState({ attribut: [] });
    }
    this.setState({ cart });
    this.addTotal(cart);
  };

  // Remove Product from cart
  remove = (products) => {
    const cart = this.state.cart.slice();
    this.setState({ cart: cart.filter((x, index) => index !== products) });
  };
  // Product count Increment
  increment = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x, index) =>
        index === products ? { x, count: x.count++ } : x
      ),
    });
    this.addTotal(cart);
  };
  // Product count Decrement
  decrement = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x, index) =>
        index === products ? { x, count: x.count-- } : x
      ),
    });
    this.addTotal(cart);
  };
  // Currency Filter
  filterCurrency = (c) => {
    this.setState({
      curr: c,
    });
  };
  // Cart Products Image Slider
  ProductImageInc = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x, index) =>
        index === products ? { x, co: x.co === 5 ? (x.co = 0) : x.co++ } : x
      ),
    });
  };
  // Cart Products Image Slider
  ProductImageDec = (products) => {
    const cart = this.state.cart.slice();
    this.setState({
      cart: cart.filter((x, index) =>
        index === products ? { x, co: x.co === 0 ? (x.co = 4) : x.co-- } : x
      ),
    });
  };
  // Product Category FIlter
  CategoryFilter = (event) => {
    this.setState({
      cateogryP: event.target.value,
    });
  };
  // Cart Total
  addTotal = (cart) => {
    let total = 0;
    cart?.forEach((item) => {
      item?.prices?.forEach((j) => {
        if (j.currency === `${this.state.curr}`) {
          total = total + j.amount * item.count;
        }
        this.setState({ tot: total });
      });
    });
  };
  // Product Category ALl
  AllProductCategory = () => {
    this.setState({
      cateogryP: "all",
    });
  };
  // Product Category Clothes
  clothess = () => {
    this.setState({
      cateogryP: "clothes",
    });
  };
  // Product Category Tech
  techs = () => {
    this.setState({
      cateogryP: "tech",
    });
  };

  // Open Overlay
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

  // Close Overlay
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

  // Open Currency Change Dropdown
  openCurr = () => {
    this.setState({
      filterCurr: true,
    });
  };

  // Close Currency Change Dropdown
  closeCurr = () => {
    this.setState({
      filterCurr: false,
    });
  };

  att = (cart) => {
    cart.map((h) =>
      this.setState({
        attribut: h.attributes,
      })
    );
  };

  // New Attribut array
  NewAttribut = (pr_id, att_id, att_value, att_type) => {
    const obj = {
      pr_id: pr_id,
      att_id: att_id,
      att_value: att_value,
      att_type: att_type,
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
          ProductDetail: this.ProductDetail,
          cartt: this.addToCart,
          rem: this.remove,
          dec: this.decrement,
          inc: this.increment,
          filterCurrency: this.filterCurrency,
          open: this.openModel,
          close: this.closeModel,
          CategoryFilter: this.CategoryFilter,
          clothes: this.clothess,
          tech: this.techs,
          NewAttribut: this.NewAttribut,
          closeCurr: this.closeCurr,
          openCurr: this.openCurr,
          AllProductCategory: this.AllProductCategory,
          ProductImageInc: this.ProductImageInc,
          ProductImageDec: this.ProductImageDec,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvdier, ProductConsumer };

// if(item.attribut.length !== this.state.attribut.length){
//   return false
// } return console.log(item.attribut.every((val) => this.state.attribut.includes(val)))
// if (item.attribut.length !== this.state.attribut.length) return false;
// for (var i = 0, len = item.attribut.length; i < len; i++) {
//   if (
//     console.log(
//       item.attribut[i]?.att_value === this.state.attribut.att_value &&
//         item.attribut[i]?.att_id === this.state.attribut.att_id &&
//         item.attribut[i]?.att_id2 === this.state.attribut.att_id2
//     )
//   ) {
//   }
// }

// if (
//   item.attribut.length === this.state.attribut.length &&
//   item.attribut.every((e, i) =>
//     console.log(
//       Object.keys(e).length ===
//         Object.keys(this.state.attribut[i]).length &&
//         Object.keys(e).every((k) => e[k] === this.state.attribut[i][k])
//     )
//   )
// )

// {
//   alreadyInCart = true;
//   item.count++;
//   this.setState({ attribut: [] });
// }
// for (let i = 0; i < item.attribut.length; i++) {
//   if (
//     console.log(
//       item.attribut[i]?.pr_id === this.state.attribut[i]?.pr_id &&
//         item.attribut[i]?.att_id === this.state.attribut[i]?.att_id &&
//         item.attribut[i]?.att_value === this.state.attribut[i]?.att_value
//     )
//   ) {
//     alreadyInCart = true;
//     break;
//   }
// }
//  console.log(item.count++)
//     console.log("run this");
