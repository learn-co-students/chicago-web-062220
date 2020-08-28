import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      showGreased: false,
      sortBy: ''
    }
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  handleSortBy = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  filterHogs = () => {
    let updatedHogs = [...this.state.hogs]

    if (this.state.showGreased) {
      updatedHogs = updatedHogs.filter(hogObj => hogObj.greased )
    }

    if(this.state.sortBy === 'name') {
      updatedHogs = updatedHogs.sort(function(hogA, hogB) {
        const nameA = hogA.name.toUpperCase(); 
        var nameB = hogB.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    }

    if(this.state.sortBy === 'weight') {
      updatedHogs = updatedHogs.sort(function (hogA, hogB) {
        return hogA.weight - hogB.weight;
      });
    }

    return updatedHogs
  }

  render() {
    const filteredHogs = this.filterHogs()

    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} handleSortBy={this.handleSortBy} />
        <HogContainer hogs={filteredHogs} />
      </div>
    );
  }
}

export default App;





