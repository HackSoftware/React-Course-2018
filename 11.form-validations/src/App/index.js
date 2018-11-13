import React from 'react';

import BookingRequestForm from './BookingRequestForm';
import BookingRequests from './BookingRequests';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BookingRequestForm />
        <BookingRequests />
      </div>
    );
  }
}

export default App;
