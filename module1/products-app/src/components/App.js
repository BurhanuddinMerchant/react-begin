import React from "react";
import Product from "./Product";
import productData from "../misc/productData";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }
  render() {
    const ProductComponents = productData.map((product) => {
      return (
        <Product
          name={product.name}
          price={product.price}
          description={product.desctiption}
          key={product.id}
        />
      );
    });
    const displayStatus = this.state.isLoggedIn ? "LogOut" : "LogIn";
    return (
      <div>
        {ProductComponents}
        <button onClick={this.handleClick}>{displayStatus}</button>
      </div>
    );
  }
}
export default App;
