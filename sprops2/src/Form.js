
import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      task: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = { 
      ...this.state,
      completed: false
    }

    this.props.addTodo(newTodo)
    this.setState({
      task: ''
    })

  }

 render(){
   const { task } = this.state

   return (
   <form onSubmit={this.handleSubmit}>
     <input onChange={this.handleChange} type='text' name='task' value={task}/>
     <input type='submit' />
   </form>
   )
 }
}

export default Form
