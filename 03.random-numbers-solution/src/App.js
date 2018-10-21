import React, {Component} from 'react';
import './App.css';

import HeadingChildren from './components/HeadingChildren';

import {numberAndSplits} from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: numberAndSplits(),
      highScore: 0
    };
  }

  nextGame = pair => {
    const {number} = this.state.data;

    if (pair[0] + pair[1] === number) {
      this.setState((state, props) => {
        return {
          data: numberAndSplits(),
          highScore: state.highScore + 1
        };
      });
    } else {
      alert('Wrong!');
      this.setState({highScore: 0});
    }
  };

  render() {
    const {
      highScore,
      data: {number, answers}
    } = this.state;

    return (
      <div className="App">
        <HeadingChildren>High score: {highScore}</HeadingChildren>
        <HeadingChildren>{number}</HeadingChildren>
        <div className="buttons">
          {answers.map((pair, index) => {
            return (
              <button onClick={() => this.nextGame(pair)}>
                {pair[0]} + {pair[1]}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
