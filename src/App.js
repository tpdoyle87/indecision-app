import React, { Component } from 'react';

import Header from './components/header/header'
import Action from './components/action/action'
import Options from './components/Options/options'
import AddOptions from './components/addOption/addOption'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Indecision App",
      subtitle: "Put your life into the hands of a computer!",
      options: [],
      disable: true
    }
  }
  onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const option = this.state.options[randomNum]
    alert(option ? option : "You have no possibilities");
  }

  onFormSubmit = (option) => {
    if (!option) {
      return "This is not a valid option"
    } else if (this.state.options.indexOf(option) > -1) {
      return `${option} already exists and cant be added again`
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  removeAll = () => {
    this.setState({
      options: []
    })
  }

  removeChoice = (remove) => {
    const filtered = this.state.options.filter(remove)
    this.setState({
      options: filtered
    })
  }

  hasOptions = () => {
    this.setState((prevState) => {
      if (prevState.options.length !== 0) {
        return {
          disable: false
        }
      }
      return {
        disable: true
      }
    })
  }

  render() {


    return (
      <div className="App-header">
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <Action disable={this.state.disable} hasOptions={this.hasOptions} onMakeDecision={this.onMakeDecision}/>
        <Options options={this.state.options}/>
        <AddOptions
          onFormSubmit={this.onFormSubmit}
          removeAll={this.removeAll}
          hasOptions={this.hasOptions}
        />
      </div>
    );
  }
}

export default App;
