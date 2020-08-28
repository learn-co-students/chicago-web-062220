import React, { Component } from 'react'

class StockTicker extends Component {
  constructor(){
    super()
    this.state = {
      stockPrice: this.getRandomStockPrice(),
      isGreen: true 
    }
  }

  getRandomStockPrice = () => Math.floor(Math.random() * 100)

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        stockPrice: this.getRandomStockPrice()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }


  componentDidUpdate(prevProps, prevState) {

    if(prevState.stockPrice < this.state.stockPrice && !this.state.isGreen) {
      this.setState({
        isGreen: true
      })
    } else if (prevState.stockPrice > this.state.stockPrice && this.state.isGreen) {
      this.setState({
        isGreen: false
      })
    }
  }


  render () {
    const stockStyles = this.state.isGreen ? { color: 'green' } : { color: 'red' }


    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={stockStyles}>
            {this.state.stockPrice}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker




