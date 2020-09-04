
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux'


// Reducer:
// reducer is responsible for producing the state
// reducer receives 2 arguments: the currentState, and the action that is about to change the state
// using just those two arguments it will determine and produce the next state of our store





// The way to change the Store State:
//
//   you must send a dispatch
//   dispatch expects an action
//   an action is a js object with _atleast_ a key called type
//
//   the action is sent to the reducer function along with the current state
//   it's the reducers responsibility to create the new StoreState using these two pieces of information


const defaultState = {
  count: 9,
  totalClickCount: 40
}

const reducer = (state=defaultState, action) => {
  console.log(action, '------');
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
        totalClickCount: state.totalClickCount + 1
      }
    case 'RESET_CLICKS':
      return {
        ...state,
        totalClickCount: 0
      }
    case 'SUBTRACT':
      return {
        ...state,
        count: state.count - 1,
        totalClickCount: state.totalClickCount + 1
      }
    default:
      return state
  }
}


const store = createStore(reducer)



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Counter />
        </header>
      </div>
    );
  }
}





class Title extends React.Component {
  constructor(){
    super()

    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div>
        <h4> Welcome to Counter:</h4>
        <p>total click count: {store.getState().totalClickCount}</p>
      </div>
    );
  }
}

















class Counter extends React.Component {
  constructor(){
    super()

    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  add = () => {
    const action = { type: 'ADD' }

    store.dispatch(action)
  }

  subtract = () => {
    const action = { type: 'SUBTRACT' }

    store.dispatch(action)
  }

  resetClicks = () => {
    const action = { type: 'RESET_CLICKS' }
    
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <h4>Count: { store.getState().count } </h4>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.resetClicks}>reset total click count</button>
      </div>
    );
  }
}

export default App;






