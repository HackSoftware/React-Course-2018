import React from 'react';

import backgroundImage from 'assets/background.jpg';
import Navigation from 'components/Navigation';

const withNavigation = WrappedComponent => {
  class Wrapper extends React.Component {
    render() {
      return (
        <div
          className="page page--with_background centered"
          style={{backgroundImage: `url(${backgroundImage})`}}>
          <Navigation />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return Wrapper;
};

export default withNavigation;
