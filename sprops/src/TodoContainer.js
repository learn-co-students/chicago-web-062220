import React from 'react'
import Card from './Card'

class TodoContainer extends React.Component {
  renderTodos = () => {
    return this.props.todos.map(todoObj => {
      return <Card todo={todoObj} />
    })
  }

  render(){
    return(
      <div>
        { this.renderTodos() }
      </div>
    )
  }
}


export default TodoContainer
