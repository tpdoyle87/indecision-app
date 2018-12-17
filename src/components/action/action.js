import React, { Component } from 'react'

import './action.scss'

class Action extends Component {
  whatToDo = () => {
    this.props.onMakeDecision();
  }
  render() {
    return (
      <button className="launch-button" onClick={this.whatToDo}>What should I do?</button>
    )
  }
}

export default Action;
