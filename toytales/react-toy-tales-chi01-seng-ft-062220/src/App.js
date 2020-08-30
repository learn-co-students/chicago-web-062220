import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      display: true,
      toys: []
    }
  }

  addToy = (newToy) => {
    this.setState({
      toys: [...this.state.toys, newToy]
    })
  }

  destroyToy = (id) => {
    const updatedToys = this.state.toys.filter(toyObj => toyObj.id !== id)

    this.setState({
      toys: updatedToys
    })
    
  }

  updateLikes = (id) => {
    const updatedToys = this.state.toys.map(toyObj => {
      if(toyObj.id === id) {
        return {
          ...toyObj,
          likes: toyObj.likes + 1
        }
      } else {
        return toyObj
      }
    })

    this.setState({
      toys: updatedToys
    })
    
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toysArr => {
      this.setState({
        toys: toysArr
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer updateLikes={this.updateLikes} toys={this.state.toys} destroyToy={this.destroyToy} />
      </>
    );
  }

}

export default App;
