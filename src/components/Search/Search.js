import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={this.props.searchSongs} className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  onChange={this.props.onChange}
                  type="text"
                  name="keyword"
                  placeholder="Search..."
                />
              </div>
              <div className="col-auto">
                <button className="btn-danger btn btn-lg" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Search;
