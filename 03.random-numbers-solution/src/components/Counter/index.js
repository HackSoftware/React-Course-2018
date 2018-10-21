import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue || 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  increase = () => {
    const {value} = this.state;

    this.setState({value: value + 1});
  };

  decrease = () => {
    const {value} = this.state;

    this.setState({value: value - 1});
  };

  render() {
    console.log('In Counter render');

    const {value} = this.state;

    return (
      <div>
        <div>{value}</div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
