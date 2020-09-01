

import React, { Component } from "react";

import HogCard from './HogCard'

class HogContainer extends Component {

  renderHogs = () => {
    return this.props.hogs.map(hogObj => {
      return <HogCard {...hogObj} />
    })
  }

  render() {
    return (
      <div className="ui grid container">
      {this.renderHogs()}
      </div>
    );
  }
}

export default HogContainer;
