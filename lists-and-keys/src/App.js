import React, {Component} from 'react';
import './App.css';

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
    console.log(this.state);

    return (
      <div className="App">
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
