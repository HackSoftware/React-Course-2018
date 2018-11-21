import React from 'react';

import {default as bookingListReducer} from 'actions/bookingList';

const reduceAction = (state, actionObject, changeStateFunc) => {
  const reducers = [bookingListReducer];

  const newState = reducers.reduce(
    (newState, reducer) => reducer(actionObject, newState),
    state
  );

  changeStateFunc(newState);
};

const initialState = {
  bookingListData: 'testing'
};

const StateContext = React.createContext({
  sharedState: initialState,
  dispatch: () => {}
});

class StateProvider extends React.Component {
  constructor(props) {
    super(props);

    const changeStateFunc = obj =>
      this.setState({...this.state, sharedState: obj});

    this.state = {
      sharedState: initialState,
      dispatch: actionObject =>
        reduceAction(this.state.sharedState, actionObject, changeStateFunc)
    };
  }

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export {StateContext, StateProvider};
