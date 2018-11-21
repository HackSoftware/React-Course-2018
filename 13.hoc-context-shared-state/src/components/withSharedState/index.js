import _ from 'lodash';
import React from 'react';

import {StateContext} from 'components/GlobalStateManager';

const withSharedState = (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent => {
  // Prepare map dispatch to props
  const actionsMappedToProps = dispatch =>
    _.mapValues(mapDispatchToProps, action => actionParams =>
      dispatch(action(actionParams))
    );

  const Wrapper = props => (
    <StateContext.Consumer>
      {value => (
        <WrappedComponent
          {...props}
          {...mapStateToProps(value.sharedState)}
          {...actionsMappedToProps(value.dispatch)}
          dispatch={value.dispatch}
        />
      )}
    </StateContext.Consumer>
  );

  return Wrapper;
};

export default withSharedState;
