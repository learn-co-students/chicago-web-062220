import React from 'react';
import logo from './logo.svg';
import TodoContainer from './TodoContainer'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [
        { task: 'clean room', completed: false},
        { task: 'fix internet', completed: false},
        { task: 'wash dishes', completed: false}
      ]
    }
  }


  handleDelete = () => {
    this.setState({
      todos: []
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h4>Todo App</h4>
         <button onClick={this.handleDelete}>Delete All Todos</button>
         <TodoContainer todos={this.state.todos} />
        </header>
      </div>
    );
  }
}

export default App;
