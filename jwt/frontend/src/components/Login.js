import React from 'react';
import { loginSuccess } from '../actions/auth'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'raza',
      password: 'hello',
      error: null
    }
  }

  handleInputChange = (e) => { this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.state)
    }

    fetch('http://localhost:4000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        localStorage.setItem('myAppToken', data.token)
        this.props.loginSuccess(data)
        this.props.history.push('/dashboard')
      }
    })
    
    
    // send over login cred to the backend
    //
    // once it comes back:
    //    if it's successful:
    //       1. store the authenticated user in our redux store
    //       2. redirect to the dashboard page
  }

  render(){
    return (
      <div>
        <h3>Sign in</h3>
        {this.state.error ? <h6>{this.state.error}</h6> : null}
        <form onSubmit={this.handleSubmit}>
          <label>username:</label>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <br/>
          <br/>
          <label>password:</label>
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)






