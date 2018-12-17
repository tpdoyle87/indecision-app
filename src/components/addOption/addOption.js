import React, { Component } from 'react'

import './addOption.scss'

class AddOption extends Component {
    whatToAdd = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value;
      this.props.onFormSubmit(option)
      e.target.elements.option.value = ''
    }

    whatToRemove = () => {
      this.props.removeAll();
    }
  render() {
    return (
      <div>
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
