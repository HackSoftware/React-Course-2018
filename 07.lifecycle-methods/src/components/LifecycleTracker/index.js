import React from 'react';

import _ from 'lodash';

class LifecycleTracker extends React.Component {
  constructor(props) {
    super(props);

    console.log('In constructor');

    this.state = {
      number: _.random(1, 10)
    };
  }

  componentDidMount() {
    console.log('In componentDidMount');

    this.interval = setInterval(() => {
      this.setState(state => {
        return {
          number: _.random(1, 10)
        };
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState.number, this.state.number);

    if (Math.abs(prevState.number - this.state.number) === 3) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    console.log('In componentWillUnmount');
    clearTimeout(this.timeout);
  }

  render() {
    console.log('In render');

    const {number} = this.state;

    return <p>{number}</p>;
  }
}

export default LifecycleTracker;
