import React from 'react'


class Card extends React.Component {

  handleClick = () => {
    this.props.removeTodo(this.props.todo.id)
  }

  render(){
    console.log(this.props, '------');
    return <div>
      <p>{this.props.todo.task} <button>mark as complete</button><button onClick={this.handleClick}>X</button></p>
    </div>
  }
}


export default Card
