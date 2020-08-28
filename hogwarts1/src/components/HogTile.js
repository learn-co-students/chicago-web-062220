


import React from 'react'

class HogTile extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: true
    }
  }

 renderImage = () => {
   const { name } = this.props.hog

   // const imageName = name.toLowerCase().split(' ').join('_')
   const imageName = name.toLowerCase().replace(/\ /g, '_')
   const image = require(`../hog-imgs/${imageName}.jpg`)

   return <img src={image} height={'150px'} width={'150px'}/>
 }

  renderDetails = () => {
   const { name, weight, specialty } = this.props.hog

   return <div>
       <p>weight: {weight}</p>
       <p>specialty: {specialty}</p>
     </div>
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
    
  }

 render(){
   const { name, weight, specialty } = this.props.hog

   return (
   <div className='ui seven wide column pigTile'>
     <p>{name}</p>
     {this.renderImage()}
     <button onClick={this.toggleDetails}>toggle details</button>

     { this.state.showDetails ? this.renderDetails() : null }
   </div>
   )
 }
}

export default HogTile

