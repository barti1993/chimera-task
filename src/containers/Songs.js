import React, { Component } from "react";
import Song from "../components/Song/Song";

class Songs extends Component {
  render() {
    if (this.props.filteredSongs.length > 0) {
      return (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="results-heading">
              Searching For: {this.props.keyword}
            </h3>
            {this.props.filteredSongs.map(data => (
              <Song data={data} />
            ))}
            <hr />
          </div>
        </div>
      );
    } else {
      if (this.props.songs.length > 0) {
        return (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="results-heading">
                Searching results for: {this.props.keyword}
              </h3>
              {this.props.songs.map(data => (
                <Song data={data} />
              ))}
              <hr />
            </div>
          </div>
        );
      } else {
        return (
          <div className="row justify-content-center">
            <div className="col-md-8 justify-content-center not-found-text">
              Sorry, no songs found
            </div>
          </div>
        );
      }
    }
  }
}
export default Songs;
