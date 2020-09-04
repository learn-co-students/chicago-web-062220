

import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { username } = this.state

    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => resp.json())
    .then(data => {

      this.props.history.push(`/dashboard/${username}`)
    })
    
  }

  render() {
    console.log(this.props)
    return (
      <div className={`app`}>
       <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' value={this.state.username} />
        <input type='submit' />
       </form>
      </div>
    );
  }
}

export default Login;
