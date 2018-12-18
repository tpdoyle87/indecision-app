import React, { Component } from 'react'

import './addOption.scss'

class AddOption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
  }

    whatToAdd = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.onFormSubmit(option)
      e.target.elements.option.value = '';

      this.setState(() => {
        return { error }
      })
      this.props.hasOptions();
    }

    whatToRemove = () => {
      this.props.removeAll();
      this.props.hasOptions();
    }


  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.whatToAdd}>
          <input type="text" name="option"/>
          <button className="all-in-line">Add Option</button>
        </form>
          <label>-------------</label>
          <button className="all-in-line" onClick={this.whatToRemove}>RemoveAll</button>
      </div>
    );
  }
}

export default AddOption
