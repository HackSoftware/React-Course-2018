import React from 'react';

import backgroundImage from 'assets/background.jpg';

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
      </div>
    );
  }
}

export default AddBooking;
