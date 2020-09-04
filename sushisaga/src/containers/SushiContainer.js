

import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            props.sushis.map(sushiObj => {
              const isEaten = this.props.eatenSushis.includes(sushiObj.id)



              return <Sushi isEaten={isEaten} sushi={sushiObj} handleEaten={this.props.handleEaten} /> 
            })

          }
          <MoreButton handleMoreButton={this.props.handleMoreButton} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
