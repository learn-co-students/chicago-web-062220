
import React, { Component } from "react";

class Filter extends Component {

  render() {
    console.log(this.state)
    return (
      <div className="filterWrapper">
          <input
            type="checkbox"
            onChange={this.props.toggleGreased} />
           Greased


      Sort By: 
      <select onChange={this.props.handleChangeFilter}>
       <option>all</option>
       <option>name</option>
       <option>weight</option>
      </select>
      </div>
    );
  }
}

export default Filter;
