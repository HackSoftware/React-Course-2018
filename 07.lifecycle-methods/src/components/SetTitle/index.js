import React from 'react';

class SetTitle extends React.Component {
  updateTitle = title => {
    document.title = title || this.props.title;
  };

  componentDidMount() {
    this.originalTitle = document.title;

    this.updateTitle();
  }

  componentDidUpdate() {
    this.updateTitle();
  }

  componentWillUnmount() {
    this.updateTitle(this.originalTitle);
  }

  render() {
    // renderless component
    return null;
  }
}

export default SetTitle;
