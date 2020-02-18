import React, { Component } from "react";

class InputCheckbox extends Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          name="filters"
          value={this.props.value}
          onChange={this.props.onChange}
        />{" "}
        {this.props.name}
      </label>
    );
  }
}

export default InputCheckbox;
