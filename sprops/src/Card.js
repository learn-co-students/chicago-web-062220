import React from 'react'


class Card extends React.Component {
  render(){
    console.log(this.props, '------');
    return <div>
      <p>{this.props.todo.task}</p>
    </div>
  }
}


export default Card
