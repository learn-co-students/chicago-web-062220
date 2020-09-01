import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() { 
    super() 
    this.state = {
      sushis: [],
      startIndex:0,
      budget: 50,
      eatenSushis: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushiArr => {
      const updatedSushis = sushiArr.map(sushiObj => {
        return {
          ...sushiObj,
          isEaten: false
        }
      })

      this.setState({
        sushis: updatedSushis
      })
    })
  }


  handleMoreButton = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  handleEaten = (id, price) => {
    if (price > this.state.budget) {
      alert('you need more money')
      return 
    }

    const updatedEatenSushis = [...this.state.eatenSushis, id]

    this.setState({
      eatenSushis: updatedEatenSushis
    })










    // const updatedSushis = this.state.sushis.map(sushiObj => {
      // if(sushiObj.id === id) {
        // return {
          // ...sushiObj,
          // isEaten: true
        // }
      // } else {
        // return sushiObj
      // }
    // })

    // const newBudget = this.state.budget - price

    // this.setState({
      // sushis: updatedSushis,
      // budget: newBudget
    // })
  }



  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)

    return (
      <div className="app">
        <SushiContainer eatenSushis={this.state.eatenSushis} handleEaten={this.handleEaten} sushis={fourSushis} handleMoreButton={this.handleMoreButton} />
        <Table budget={this.state.budget} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;




