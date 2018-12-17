import React, { Component } from 'react'

import Option from './option'
import './options.scss'

class Options extends Component {
  render() {
    return (
      <div className='big-ol-style'>
        <ol>
          {this.props.options.map((option) => <Option key={option} option={option} /> )}
        </ol>
      </div>
    );
  }
}

export default Options
