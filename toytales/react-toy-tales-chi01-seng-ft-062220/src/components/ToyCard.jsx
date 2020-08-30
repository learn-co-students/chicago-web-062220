import React, { Component } from 'react';

class ToyCard extends Component {




  handleLike = () => {
    const { id, likes } = this.props.toy

    const reqObj = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify( { likes: likes + 1 } )
    }

    fetch('http://localhost:3000/toys/' + id, reqObj)
    .then(resp => resp.json())
    .then(toy => {
      this.props.updateLikes(id)
    })

  }

  handleDelete = () => {
    const { id } = this.props.toy

    fetch('http://localhost:3000/toys/' + id, { method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.destroyToy(id)
    })
  }


  render() {
    const { name, id, image, likes } = this.props.toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={'toy image'} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;




