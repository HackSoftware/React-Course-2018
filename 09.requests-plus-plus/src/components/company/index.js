import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div className="company">
        {this.props.company.title}
      </div>
    );
  }
}

export default Company;
