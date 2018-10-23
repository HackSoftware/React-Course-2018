import React, {Component} from 'react';
import './App.css';

import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: {
          f: 10
        }
      }
    };
  }

  handleClick = () => {
    // shallow merge
    this.setState(state => {
      return {
        c: {
          ...state.c,
          f: 50,
          d: 10
        }
      };
    });
  };

  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
