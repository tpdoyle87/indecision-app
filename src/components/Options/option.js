import React, { Component } from 'react'

import './options.scss'

class Option extends Component {
  render() {
    return(

        <li>{this.props.option}</li>

    );
  }
}

export default Option
