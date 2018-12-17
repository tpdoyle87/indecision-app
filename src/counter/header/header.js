import React, { Component } from 'react'

console.log('hello')

class Header extends Component {

  render() {
    return(
      <div>
        <h1>Count: {this.props.count}</h1>
      </div>
    );
  }

}

export default Header
