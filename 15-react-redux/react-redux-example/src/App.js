import React, { Component } from "react";
import { toggleShuffle, togglePlay, initPlaylist } from "./store";
import { connect } from "react-redux";
import axios from "axios";

import "./App.css";

class App extends Component {
  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/HackSoftware/Songs/songs").then(response => {
      this.props.initPlaylist(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.props.toggleShuffle}>Toggle Shuffle</button>
          <button onClick={this.props.togglePlay}>Toggle Play</button>
          {this.props.shuffle && <p>Shuffle is on</p>}
          {!this.props.shuffle && <p>Shuffle is off</p>}
          {this.props.songs.length}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shuffle: state.shuffle,
    songs: state.songs
  };
};

const mapDispatchToProps = { toggleShuffle, togglePlay, initPlaylist };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
