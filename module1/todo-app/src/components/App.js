import React from "react";
import TodoCard from "./TodoCard";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    return (
      <div>
        <TodoCard isLoading={this.state.isLoading} />
      </div>
    );
  }
}
export default App;
