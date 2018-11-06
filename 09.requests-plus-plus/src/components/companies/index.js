import React, { Component } from "react";

import Company from "../../components/company";

class Comapnies extends Component {
  render() {
    return (
      <div>
        {this.props.companies.map(company => (
          <Company company={company} key={company.id}/>
        ))}
      </div>
    );
  }
}

export default Comapnies;
