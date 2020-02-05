import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
      //this returns a new array, so we're not mutating the original
      //we're making a new array and getting rid of the the one passed in
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  toggleCompletion =(id)=>{
    const updatedTodos = this.state.todos.map(todo=>{
      if(todo.id === id){
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          id={todo.id}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div>
        <h1>React Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
