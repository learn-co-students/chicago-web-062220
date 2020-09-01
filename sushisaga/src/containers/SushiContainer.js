

import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushiObj => {
            const isEaten = props.eatenSushis.includes(sushiObj.id)



            return <Sushi isEaten={isEaten} sushi={sushiObj} handleEaten={props.handleEaten} /> 
          })

        }
        <MoreButton handleMoreButton={props.handleMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
