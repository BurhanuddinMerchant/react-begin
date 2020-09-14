import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        //note here we cannot just change the previous state directly as it is directly modifying it and it is not allowed , thus we store the previous value + 1 in the current count property as previousState.count++ would modify the previous count and it is not allowed
        count: prevState.count + 1,
      };
    });
  }

  render() {
    let styleCheckbox = {
      display: "inline",
    };
    let styleText = this.props.completed
      ? {
          display: "inline",
          textDecoration: "line-through",
          fontStyle: "italic",
          color: "#999999",
        }
      : styleCheckbox;
    return (
      <div>
        <input
          style={styleCheckbox}
          type="checkbox"
          checked={this.props.completed}
          onChange={(event) => {
            this.props.handleChange(this.props.id);
          }}
        />
        <p style={styleText}>{this.props.task}</p>
        <button onClick={this.handleClick}>Change</button>
        <p style={styleCheckbox}> Count {this.state.count}</p>
        <hr />
      </div>
    );
  }
}
export default TodoItem;
