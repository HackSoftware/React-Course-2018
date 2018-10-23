import React from 'react';

class Item extends React.Component {
  render() {
    const {children} = this.props;

    console.log(this.props);

    return (
      <li>
        {children}
      </li>
    );
  }
}

export default Item;
