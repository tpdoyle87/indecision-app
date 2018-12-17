import React, { Component } from 'react'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.title}</h1>
        <h6>{this.props.subtitle}</h6>
      </div>
    )
  }
}

export default Header
