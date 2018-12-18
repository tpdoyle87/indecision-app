import React, { Component } from 'react'

import './App.css'

class Visibility extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false
    }
  }

  whatToDo = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return(
      <div className="App-header">
        <h1>Visibility App</h1>
        <button onClick={this.whatToDo}>{this.state.visibility ? "Hide Information" : "Show Infromation"}</button>
        { this.state.visibility && <p>Some information to be shown</p> }
      </div>

    );
  }
}

export default Visibility
