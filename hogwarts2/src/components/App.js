import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

import hogsData from '../porkers_data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogsData,
      showGreased: false,
      filterType: 'all'
    }
  }

  toggleGreased = () => {
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })





    // this.setState({
      // showGreased: !this.state.showGreased
    // })
  }

  handleChangeFilter= (event) => {
    this.setState({
      filterType: event.target.value
    })

  }

  findHogs = () => {
    let hogs = this.state.hogs

    if (this.state.showGreased) {
      hogs = hogs.filter(hogObj => hogObj.greased)
    }


    if (this.state.filterType === 'name') {
      hogs = hogs.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })

    } else if (this.state.filterType === 'weight') {
      hogs = hogs.sort(function (hogA, hogB) {
        return hogB.weight - hogA.weight;
      });
    }

    return hogs
  }

  render() {
    // const hogsToShow = this.findHogs()

    return (
      <div className="filter">
        <Nav />
        <Filter 
          handleChangeFilter={this.handleChangeFilter}
          toggleGreased={this.toggleGreased} />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
