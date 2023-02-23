import React, { Component } from "react";
import "./Product.css";

export class Product extends Component {
  constructor(props) {
    super(props);
    const { img, name, description } = props;

    this.state = {
      image: img,
      name: name,
      description: description
    };
  }
  render() {
    return (
      <>
        &nbsp; &nbsp; &nbsp;
        <div className="productdiv">
          <img className="product" src={this.state.image} alt="product" />
          <h4> {this.state.name}</h4>
          <span> {this.state.description}</span> <br /> <br />
          <button className="button">PURCHASE</button>
          <button className="button">LIKE</button>
          &nbsp; &nbsp; &nbsp;
          <button className="button">SHARE</button>&nbsp; &nbsp; &nbsp;
          <br /> <br />
        </div>
        &nbsp; &nbsp; &nbsp;
      </>
    );
  }
}

export default Product;
