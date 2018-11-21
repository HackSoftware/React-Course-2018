import React from 'react';

import {StateContext, StateProvider} from 'components/GlobalStateManager';

const Root = ({Routes}) => {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
};

export default Root;
