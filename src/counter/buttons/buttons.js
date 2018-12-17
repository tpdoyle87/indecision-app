import React, { Component } from 'react'

class Buttons extends Component {

  addOne = () => {
    this.props.add();
  }

  minusOne = () => {
    this.props.minus();
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    return(
      <div>
        <button onClick={this.addOne}>Add one</button>
        <button onClick={this.minusOne}>Minus one</button>
        <button onClick={this.reset}>Reset Count</button>
      </div>
    );
  }
}

export default Buttons
