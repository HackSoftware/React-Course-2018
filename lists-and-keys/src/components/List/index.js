import React from 'react';

import _ from 'lodash';

import uuid4 from 'uuid/v4';

import Item from '../Item';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: _.range(1, 1000).map(item => {
        return {
          number: item,
          key: uuid4()
        };
      })
    };

    setInterval(() => {
      this.setState({});
    }, 300);

    // setInterval(() => {
    //   this.setState(state => {
    //     console.log('Sorting ....');
    //     return {
    //       data: state.data.sort()
    //     };
    //   });
    // }, 5000);
  }

  render() {
    // const items = this.state.data.map(item => {
    //   return <li>{item}</li>;
    // });

    // const items = [];

    // this.state.data.forEach(item => {
    //   items.push(
    //     <li>
    //       {item}
    //     </li>
    //   );
    // });
    //
    //
    console.log('In render');

    const {data} = this.state;

    return (
      <ul>
        {data.map(item => {
          return (
            <Item key={item.key}>
              {item.number}
            </Item>
          );
        })}
      </ul>
    );
  }
}

export default List;
