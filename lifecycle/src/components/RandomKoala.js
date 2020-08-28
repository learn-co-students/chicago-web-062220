import React, { Component } from 'react'


import KoalaCard from './KoalaCard'



class RandomKoala extends Component {

  render () {

    return (
      <div className="app-children">
      { 
        this.props.koalas.map(koalaObj => {
          return <KoalaCard koala={koalaObj} />
        }) 
      }
      </div>
    )
  }
}

export default RandomKoala
