import React, { Component } from "react";
import InputCheckbox from "../UI/InputCheckbox/InputCheckbox";
class Filters extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="filters">
            Filter tabs by:
            <InputCheckbox
              value={"CHORDS"}
              onChange={this.props.onChange}
              name={"Chords"}
            />
            <InputCheckbox
              value={"TEXT_BASS_TAB"}
              onChange={this.props.onChange}
              name={"Bass"}
            />
            <InputCheckbox
              value={"TEXT_GUITAR_TAB"}
              onChange={this.props.onChange}
              name={"Guitar"}
            />
            <InputCheckbox
              value={"PLAYER"}
              onChange={this.props.onChange}
              name={"Player"}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
