import React, { Component } from 'react'

class AddOption extends Component {
  state = { error: undefined }

  whatToAdd = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.onFormSubmit(option)
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState(() => ( {error} ))
    this.props.hasOptions();
  }

  render() {
    return (
      <div>
      {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.whatToAdd}>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption
