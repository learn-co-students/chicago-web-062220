import React, { Component } from 'react'


class DigitalClock extends Component {
  constructor(){
    super()

    this.state = {
      time: this.getTime()
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.getTime()
      })
    }, 1000)
  }

  getTime = () => {
    const date = new Date();
    return `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
  } 

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time}
        </h2>
      </div>
    )
  }
}

export default DigitalClock










