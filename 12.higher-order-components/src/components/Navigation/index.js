import React from 'react';

import {LOGIN_URL, BOOKING_LIST_URL, ADD_BOOKING_URL} from 'urls';

import './styles.css';

class Navigation extends React.Component {
  urls = [
    {url: LOGIN_URL, label: 'Login'},
    {url: BOOKING_LIST_URL, label: 'Booking List'},
    {url: ADD_BOOKING_URL, label: 'Add Booking'}
  ];

  render() {
    return (
      <div className="navigation">
        {this.urls.map(link => (
          <a href={link.url} key={link.url} className="navigation__link">
            {link.label}
          </a>
        ))}
      </div>
    );
  }
}

export default Navigation;
