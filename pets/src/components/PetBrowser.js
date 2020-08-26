import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    const { onAdoptPet, pets } = this.props

    return pets.map( petObj => {
      return <Pet key={petObj.id} pet={petObj} onAdoptPet={onAdoptPet} />
    })
    
  }

  render() {
    return <div className="ui cards">
      { this.renderPets() }
     </div>
  }
}

export default PetBrowser
