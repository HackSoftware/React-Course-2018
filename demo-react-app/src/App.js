import React from 'react';

import Heading from './Heading';
import HeadingProps from './HeadingProps';
import Container from './Container';

class App extends React.Component {
  render() {
    return (
      <Container>
        <HeadingProps text="Heading with props" />
        <Heading a="1" b="2">
          <>
            <p>some paragraph</p>
            Heading with children
            <p>fragments</p>
          </>
        </Heading>
      </Container>
    );
  }
}

export default App;
