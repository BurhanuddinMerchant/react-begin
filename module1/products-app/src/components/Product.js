import React from "react";
class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>name : {this.props.name}</h3>
        <p>price: {this.props.price}</p>
        <p> description : {this.props.description}</p>
      </div>
    );
  }
}
export default Product;
