import React, { Component } from 'react'

import Header from './counter/header/header'
import Buttons from './counter/buttons/buttons'
import './App.css'
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  addOne = () => {
    // let increase = this.state.count;
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  minusOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  reset = () => {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return(
      <div className="App-header">
        <Header count={this.state.count}/>
        <Buttons add={this.addOne} minus={this.minusOne} reset={this.reset}/>
      </div>
    )
  }
}

export default Counter
