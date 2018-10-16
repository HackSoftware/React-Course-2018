import React from 'react';

class HeadingProps extends React.Component {
  render() {
    // const text = this.props.text;
    console.log(this.props);
    const {text} = this.props;

    return <h1>{text}</h1>;
  }
}

export default HeadingProps;
