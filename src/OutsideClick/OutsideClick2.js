import React, { Component } from "react";
import PropTypes from "prop-types";
export default class OutsideClick2 extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      window.scrollY < 200
    ) {
      this.props.currClose();
    }
  }
  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideClick2.propTypes = {
  children: PropTypes.element.isRequired,
};
