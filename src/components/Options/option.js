import React, { Component } from 'react'

import './options.scss'

class Option extends Component {
  render() {
    return(

        <li>{this.props.option}<button>Remove</button></li>

    );
  }
}

export default Option
