import React, {Component} from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      task:""
    }
  }
  handleChange=(evt)=>{
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }

  handleSubmit=(evt)=>{
    
    evt.preventDefault();
    let newTask = {...this.state, id:uuid()};
    this.props.createTodo(newTask);
    this.setState({
      task:''
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input type="text"  name ="task" id="task" placeholder="New Todo" value={this.state.task}
          onChange= {this.handleChange}/>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;