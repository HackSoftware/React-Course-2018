import React from 'react';
import _ from 'lodash';

class ScreenSize extends React.Component {
  onSizeChange = () => {
    this.props.onSizeChange(window.innerWidth, window.innerHeight);
    this.updates += 1;
    console.log(this.updates);
  };

  componentDidMount() {
    this.updates = 0;

    this.onSizeChange();

    window.addEventListener('resize', _.debounce(this.onSizeChange, 100));
  }

  render() {
    return null;
  }
}

export default ScreenSize;
