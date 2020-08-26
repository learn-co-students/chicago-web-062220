import React from 'react';
import logo from './logo.svg';
import TodoContainer from './TodoContainer'
import Form from './Form'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [
        { id: 1, task: 'clean room', completed: false},
        { id: 2, task: 'fix internet', completed: false},
        { id: 3, task: 'wash dishes', completed: false}
      ]
    }
  }


  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todoObj => todoObj.id !== id)


    this.setState({
      todos: updatedTodos
    })
  }

  handleDelete = () => {
    this.setState({
      todos: []
    })
  }


  // delete button request
  //
  // create button in Card.js
  // bind event listener to the btn
  // figure out where the state lives that needs to get updated (in this case App.js)
  // create a callback function in the component where the State Lives (App.js)
  // pass that callback function all the way down to the component where the delete btn lives
  //
  // in the eventhandle callback, pass up the id so that the parent component gets it
  //
  //
  // in the parent component callback, filter out the array of todos in order to remove
  //   the todo that just got clicked on
  //
  // update the state with the new filteredTodos array

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h4>Todo App</h4>
         <TodoContainer todos={this.state.todos} removeTodo={this.removeTodo} />
         <Form addTodo={this.addTodo} />
        </header>
      </div>
    );
  }
}

export default App;
