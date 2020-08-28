

import React from 'react'
import HogTile from './HogTile'


class HogContainer extends React.Component {
 // renderHogs = () => this.props.hogs.map(hogObj => <HogTile />)

 renderHogs = () => {
  return this.props.hogs.map(hogObj  => {
     return <HogTile hog={hogObj} key={hogObj.name} />
  })
 }


 render(){
   return (
     <div className='ui grid container'>
       {this.renderHogs()}
     </div>
   )
 }
}

export default HogContainer
