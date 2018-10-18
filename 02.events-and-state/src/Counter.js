import React from 'react';

import './Counter.css';

import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      value: 0
    };
  }

  increase = () => {
    this.setState((state, props) => {
      return {
        value: state.value + 1
      };
    });
  };

  decrease = () => {
    this.setState((state, props) => {
      return {
        value: state.value - 1
      };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  render() {
    console.log('In Counter render');

    return (
      <div className="Counter">
        <div>{this.state.value}</div>
        <Button onClick={this.increase}>+</Button>
        <Button onClick={this.decrease}>-</Button>
      </div>
    );
  }
}

export default Counter;
