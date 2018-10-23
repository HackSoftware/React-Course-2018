import React from 'react';

class AnotherButton extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <button>
        {children}
      </button>
    );
  }
}

export default AnotherButton;
