import React from 'react';
import axios from 'axios';

import {StateContext} from 'components/GlobalStateManager';
import withNavigation from 'components/withNavigation';
import withSharedState from 'components/withSharedState';

import {changeText} from 'actions/bookingList';
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

  changeText = () => {
    this.props.changeText('Maina');
  };

  componentDidMount() {
    this.fetchBookings();
  }

  render() {
    return (
      <div className="booking_list">
        <div
          onClick={this.changeText}
          className="booking_list__row booking_list__row--header">
          {this.props.parentText}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parentText: state.bookingListData
  };
};

const mapDispatchToProps = {
  changeText
};

export default withSharedState(mapStateToProps, mapDispatchToProps)(
  withNavigation(BookingList)
);
