import React, { Component } from 'react';

class ToyForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      image: 'http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png'
    }
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeImage = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newToy = {
      ...this.state,
      likes: 0
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    }

    fetch('http://localhost:3000/toys', reqObj)
    .then(resp => resp.json())
    .then(newToy => {
      this.props.addToy(newToy)
    })

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChangeName} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChangeImage} value={this.state.image} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>

          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;



