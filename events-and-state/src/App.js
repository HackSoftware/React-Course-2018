import React from 'react';
import './App.css';

import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({});
    }, 5000);
  }
  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    console.log('In App render');

    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
