import React, { Component } from "react";

class CompanyTypeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyTypes: []
    };
  }

  componentDidMount() {
    const request = new Request(
      "https://my-json-server.typicode.com/HackSoftware/companies.db/companyType"
    );
    const pro = fetch(request);
    const jsonPro = pro.then(response => response.json());
    jsonPro.then(json => this.setState({ companyTypes: json }));
  }

  render() {
    return (
      <div className="company">
        <select onChange={(event)=> this.props.changeValueHandler(event.target.value)}>
          <option value="">----</option>
          {this.state.companyTypes.map(companyType => (
            <option>{companyType.title}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default CompanyTypeFilter;
