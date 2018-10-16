import React, {Component} from 'react';
import './App.css';

import HeadingProps from './components/HeadingProps';
import HeadingChildren from './components/HeadingChildren';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Counter initialValue="10" />

        <HeadingProps text="Hello React World!" />
        <HeadingChildren>Hello React Wolrd!</HeadingChildren>

        <HeadingProps text="I have children but I don't render them">
          Children
        </HeadingProps>

        <HeadingChildren text="I have props but I'm not using them">
          Hello React Wolrd!
        </HeadingChildren>
      </div>
    );
  }
}

export default App;
