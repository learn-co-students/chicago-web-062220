

import React, { Component } from 'react';
import WidgetSelector from './components/WidgetSelector'
import DigitalClock from './components/DigitalClock'
import StockTicker from './components/StockTicker'

class App extends Component {
  constructor(){
    super() 
    this.state = {
      showClock: false
    }
  }

  toggleWidget = () => {
    this.setState({
      showClock: !this.state.showClock
    })
  }


  render() {
    return ( 
      <div id='app'>
      <WidgetSelector toggleWidget={this.toggleWidget} />
      { this.state.showClock ? <DigitalClock /> : <StockTicker /> }
      </div>
    )
  }
}

export default App;




