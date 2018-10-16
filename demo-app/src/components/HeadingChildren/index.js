import React from 'react';

class HeadingChildren extends React.Component {
  render() {
    // const children = this.props.children;
    console.log(this.props);
    const {children} = this.props;

    return <h1>{children}</h1>;
  }
}

export default HeadingChildren;
