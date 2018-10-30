import React, {Component} from 'react';
import './App.css';

import LifecycleTracker from './components/LifecycleTracker';
import SetTitle from './components/SetTitle';
import ScreenSize from './components/ScreenSize';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
      mounted: true,
      counter: 0
    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.setState(state => {
    //     return {
    //       counter: state.counter + 1
    //     };
    //   });
    // }, 100);
  }

  handleToggleUnmount = () => {
    this.setState(state => {
      return {
        mounted: !state.mounted
      };
    });
  };

  handleSizeChange = (width, height) => {
    this.setState({width, height});
  };

  render() {
    const {mounted, counter, width, height} = this.state;

    const action = mounted ? 'Unmount' : 'Mount';

    return (
      <div className="App">
        <ScreenSize onSizeChange={this.handleSizeChange} />

        {width &&
          height && (
            <p>
              {width} x {height}
            </p>
          )}

        {counter < 100 && <SetTitle title={`Progress: ${counter}`} />}

        {false && <LifecycleTracker />}

        <div>
          <button onClick={this.handleToggleUnmount}>Toggle {action}</button>
        </div>
      </div>
    );
  }
}

export default App;
