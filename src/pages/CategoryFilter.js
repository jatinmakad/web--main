import React, { Component } from "react";

export default class CategoryFilter extends Component {
  render() {
    return (
      <div>
        <div className="filter_currency">
          <select className="dropdown">
            <option value="clothes">clothes</option>
            <option value="tech">tech</option>
          </select>
        </div>
      </div>
    );
  }
}
