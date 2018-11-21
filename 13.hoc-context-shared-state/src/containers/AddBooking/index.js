import React from 'react';

import backgroundImage from 'assets/background.jpg';

import withSharedState from 'components/withSharedState';
import Navigation from 'components/Navigation';
import {BookingRequestForm} from './components';

class AddBooking extends React.Component {
  render() {
    return (
      <div
        className="page page--with_background container"
        style={{backgroundImage: `url(${backgroundImage})`}}>
        <Navigation />
        <BookingRequestForm />
        The text: {this.props.sharedState.text}
      </div>
    );
  }
}

export default withSharedState(AddBooking);
