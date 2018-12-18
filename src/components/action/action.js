import React, { Component } from 'react'

import './action.scss'

class Action extends Component {
  whatToDo = () => {
    this.props.onMakeDecision();
  }

  render() {
    return (
      <button disabled={this.props.disable} className="launch-button" onClick={this.whatToDo}>What should I do?</button>
    )
  }
}

export default Action;
