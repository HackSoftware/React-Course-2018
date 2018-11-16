import React from 'react';
import axios from 'axios';

import withNavigation from 'components/withNavigation';

import './styles.css';

const url = 'https://react-forms-backend.herokuapp.com';

class BookingList extends React.Component {
  state = {
    bookings: []
  };

  fetchBookings = () => {
    axios.get(`${url}/booking/booking-requests/`).then(response => {
      this.setState({bookings: response.data});
    });
  };

  componentDidMount() {
    this.fetchBookings();
  }

  render() {
    return (
      <div className="booking_list">
        <div className="modal-overlay">
          <div className="modal">
            <div className="booking_list__row booking_list__row--header">
              <div>Name</div>
              <div>Email</div>
              <div>Phone</div>
              <div>Start</div>
              <div>End</div>
            </div>
            {this.state.bookings.map(booking => (
              <div className="booking_list__row" key={booking.id}>
                <div>{booking.name}</div>
                <div>{booking.email}</div>
                <div>{booking.phone}</div>
                <div>{booking.start}</div>
                <div>{booking.end}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigation(BookingList);
