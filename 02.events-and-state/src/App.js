import React from 'react';
import './App.css';
import _ from 'lodash';

import Counter from './Counter';


class App extends React.Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({});
    }, 5000);
  }
  handleClick = value => {
    console.log('Clicked');
    console.log(value);
  };

  render() {
    console.log('In App render');

    const a = [1, 2];
    const b = [2, 3];

    return (
      <div className="App">
        <Counter />
        <button onClick={() => this.handleClick(a)}>{a[0]} + {a[1]}</button>

        <button onClick={this.handleClick(b)}>{b[0]} + {b[1]}</button>

        <button onClick={this.handleClick}>asdf</button>
      </div>
    );
  }
}

export default App;
