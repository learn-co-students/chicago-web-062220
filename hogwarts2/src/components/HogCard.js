


import React, { Component } from "react";

class HogCard extends Component {
  constructor(){
    super()
    this.state = {
      showDetails: true
    }
  }


  renderImage = () => {
    const { name } = this.props
    const imageName = name.toLowerCase().replace(/ /g,"_");
    const imageUrl = require(`../hog-imgs/${imageName}.jpg`)

    return <img src={imageUrl} />
  }

  renderDetails = () => {
    const { specialty, weight, "highest medal achieved":medal } = this.props
    return <div>
      <p>weight: {weight}</p>
      <p>specialty: {specialty}</p>
      <p>highest medal: {medal}</p>
    </div>
  }

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    const { name, weight } = this.props

    return (
      <div className="ui eight wide column pigTile">
        <h4>{name}</h4>
        {this.renderImage()}
        <button onClick={this.handleClick}>Show Details</button>
        {this.state.showDetails ? this.renderDetails() : null}
      </div>
    );
  }
}

export default HogCard;
