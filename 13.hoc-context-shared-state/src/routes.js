import React from 'react';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import {LOGIN_URL, BOOKING_LIST_URL, ADD_BOOKING_URL} from './urls';

import Login from 'containers/Login';
import BookingList from 'containers/BookingList';
import AddBooking from 'containers/AddBooking';

const history = createHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={LOGIN_URL} component={Login} />
        <Route exact path={BOOKING_LIST_URL} component={BookingList} />
        <Route exact path={ADD_BOOKING_URL} component={AddBooking} />
      </Switch>
    </Router>
  );
};

export default Routes;
