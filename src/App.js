import React, { Component } from "react";
import axios from "axios";
import Header from "./containers/Layout/Header/Header";
import Search from "./components/Search/Search";
import Songs from "./containers/Songs";
import Filters from "./components/Filters/Filters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      keyword: "",
      filteredSongs: []
    };
    this.searchSongs = this.searchSongs.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  searchSongs = event => {
    event.preventDefault();
    const { keyword } = this.state;
    return axios
      .get(`http://www.songsterr.com/a/ra/songs.json?pattern=${keyword}`)
      .then(response => {
        this.setState({
          songs: response.data,
          tabTypes: [],
          filteredSongs: []
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFilter = e => {
    let selectedNodes = document.querySelectorAll(
      "input[name=filters]:checked"
    );
    let selectedFilters = [];
    selectedNodes.forEach(node => {
      selectedFilters.push(node.value);
    });

    const songs = this.state.songs;
    const filteredSongs = [];
    if (selectedFilters.length > 0) {
      songs.forEach(song => {
        selectedFilters.forEach(selectedFilter => {
          if (song.tabTypes.includes(selectedFilter)) {
            filteredSongs.push(song);
          }
        });
      });
    }
    this.setState({
      filteredSongs: selectedFilters.length > 0 ? filteredSongs : songs
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Search
            searchSongs={this.searchSongs}
            onChange={this.onChange}
            handleFilter={this.handleFilter}
          />
          <Filters onChange={this.handleFilter} />
          <Songs
            filteredSongs={this.state.filteredSongs}
            songs={this.state.songs}
            keyword={this.state.keyword}
          />
        </div>
      </div>
    );
  }
}

export default App;
