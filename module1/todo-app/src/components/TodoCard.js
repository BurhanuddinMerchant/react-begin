import React from "react";
import ToDoItem from "./TodoItem";
import todoItems from "../misc/todoItems";
class TodoCard extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoItems,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      console.log("Here to change the state");
      const prevValue = prevState.todos[id - 1].completed;
      let newStatetodoItems = prevState.todos;
      newStatetodoItems[id - 1].completed = !prevValue;
      return { todos: newStatetodoItems };
    });
  }

  render() {
    const todoItemsComponents = this.state.todos.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          id={item.id}
          task={item.task}
          completed={item.completed}
          handleChange={this.handleChange}
        />
      );
    });

    return (
      <div>
        <h1>This is the page</h1>
        {this.props.isLoading ? (
          <h2>Simulating an API Call.........</h2>
        ) : (
          todoItemsComponents
        )}
        <footer>
          <h3>This is the footer</h3>
        </footer>
      </div>
    );
  }
}
export default TodoCard;
