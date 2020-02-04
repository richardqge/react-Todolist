import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      todos :[]
    };
  };
  create=(newTodo)=>{
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }

  remove=(id)=>{
    this.setState({
      todos:this.state.todos.filter(t => t.id !== id)
      //this returns a new array, so we're not mutating the original
      //we're making a new array and getting rid of the the one passed in

    });
  } 
  render(){

    const todos = this.state.todos.map(todo=>{
      return <Todo key={todo.id} task={todo.task}
            removeTodo={this.remove} id={todo.id}/>
    })
    return(
      <div>
        <h1>React Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
         {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList;