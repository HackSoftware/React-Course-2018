import React, { Component } from "react";
import { store, toggleShuffle, togglePlay } from "./store";

import "./App.css";

class App extends Component {
  state = this.getCurrentStateFromStore();

  getCurrentStateFromStore() {
    return {
      shuffle: store.getState().shuffle
    };
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();

    if (JSON.stringify(this.state) !== JSON.stringify(currentState)) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    const toggleShuffleHandler = () => {
      store.dispatch(toggleShuffle());
    };

    const togglePlayHandler = () => {
      store.dispatch(togglePlay());
    };

    console.log("rerender");
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={toggleShuffleHandler}>Toggle Shuffle</button>
          <button onClick={togglePlayHandler}>Toggle Play</button>
          {this.state.shuffle && <p>Shuffle is on</p>}
          {!this.state.shuffle && <p>Shuffle is off</p>}
        </header>
      </div>
    );
  }
}

export default App;
