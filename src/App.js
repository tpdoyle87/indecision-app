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
      options: []
    }
  }
  onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const option = this.state.options[randomNum]
    alert(option ? option : "You have no possibilities");
  }

  onFormSubmit = (option) => {
    const adjusted = this.state.options.concat(option)
    this.setState({
      options: adjusted
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

  render() {


    return (
      <div className="App-header">
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action onMakeDecision={this.onMakeDecision}/>
        <Options options={this.state.options}/>
        <AddOptions onFormSubmit={this.onFormSubmit} removeAll={this.removeAll}/>
      </div>
    );
  }
}

export default App;
