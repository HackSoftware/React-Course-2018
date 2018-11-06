import React, { Component } from "react";
import Companies from "./components/companies";
import CompanyTypeFilter from "./components/companyTypeFilter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selectedinputValue: "",
      selectedCompanyType: null,
      selectedActiveBoolean: null,
    };
  }

  componentDidMount() {
    const request = new Request(
      "http://localhost:3000/company"
    );
    const pro = fetch(request);
    const jsonPro = pro.then(response => response.json());
    jsonPro.then(json => this.setState({ companies: json }));
  }

  fetchData() {
    const urlParams = {};
    if (this.state.selectedCompanyType) {
      urlParams['type'] = this.state.selectedCompanyType;
    }
    if (this.state.selectedActiveBoolean !== null) {
      urlParams['active'] = this.state.selectedActiveBoolean;
    }
 
    const urlParamsString = new URLSearchParams(urlParams).toString();

    const request = new Request(
      "https://my-json-server.typicode.com/HackSoftware/companies.db/company?" +
        urlParamsString
    );
    const pro = fetch(request);
    const jsonPro = pro.then(response => response.json());
    jsonPro.then(json => this.setState({ companies: json }));
  }

  changeSelectedCompanyType = newValue => {
    this.setState({ selectedCompanyType: newValue }, () => this.fetchData());
  }

  render() {
    return (
      <div className="App">
        <CompanyTypeFilter
          changeValueHandler={this.changeSelectedCompanyType}
        />
        <Companies companies={this.state.companies} />
      </div>
    );
  }
}

export default App;
