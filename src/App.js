import React, { Component } from 'react';

import Header from './components/header/header'
import Action from './components/action/action'
import Options from './components/Options/options'
import AddOptions from './components/addOption/addOption'
import OptionModal from './components/optionModal/optionModal'

import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends Component {
  state = {
      title: "Indecision App",
      subtitle: "Put your life into the hands of a computer!",
      options: [],
      disable: true,
      selectedOption: undefined
    }

  componentDidMount(prevState) {
    try {
    const data = localStorage.getItem("options")
      if (this.state.options) {
        this.setState(() => ({options: {JSON.parse(data) === null ? [] : JSON.parse(data) } }))
        this.hasOptions()
      }
    } catch {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem("options", json)
      }
    } catch (e) {

    }
  }

  componentWillUnmount() {
    console.log("component will unmount")
  }

  onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  onFormSubmit = (option) => {
    if (!option) {
      return "This is not a valid option"
    } else if (this.state.options.indexOf(option) > -1) {
      return `${option} already exists and cant be added again`
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  removeAll = () => {
    this.setState(() => ({options: [] }));
    this.hasOptions();
  }

  removeChoice = (remove) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => option !== remove)
    }))
    this.hasOptions()
  }

  hasOptions = () => {
    this.setState((prevState) => {
      try {
        if (prevState.options.length !== 0) {
          return {
            disable: false
          }
        }
        return {
          disable: true
        }
      } catch (e) {

      }
    })
  }

  closeModal = () => {
    this.setState(() => ({selectedOption: false}))
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <div className="container">
          <Action
            disable={this.state.disable}
            hasOptions={this.hasOptions}
            onMakeDecision={this.onMakeDecision}
          />
          <div className="widget">
            <Options
            options={this.state.options}
            removeChoice={this.removeChoice}
            removeAll={this.removeAll}
            />
            <AddOptions
              onFormSubmit={this.onFormSubmit}
              removeAll={this.removeAll}
              hasOptions={this.hasOptions}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}



export default App;
