

import React from 'react';
import { NavLink, Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className={`ui inverted blue menu`}>
        <NavLink to='/' className="ui header">
          <i className={`${this.props.icon} icon`} />
          <div className="content">{this.props.title}</div>
          <div className="sub header">{this.props.description}</div>
        </NavLink>
        <div className="right menu">
          <NavLink to='/login' className="item">
            Login
          </NavLink>
          <NavLink to='/about' className="item">
            About Page
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
