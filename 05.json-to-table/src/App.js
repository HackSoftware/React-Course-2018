import React from 'react';
import './App.css';

import FileReaderInput from 'components/FileReaderInput';
import Table from 'components/Table';

class App extends React.Component {
  state = {
    file: null,
    data: null,
    parseError: null
  };

  onFileDrop = file => {
    this.setState({file});
  };

  onFileRead = contents => {
    try {
      const parsed = JSON.parse(contents);
      this.setState({data: parsed, parseError: null});
    } catch (error) {
      this.setState({parseError: error, data: null});
    }
  };

  render() {
    const {file, data, parseError} = this.state;

    return (
      <div className="App">
        <p>
          Input a JSON file from your file system with the{' '}
          <a href="https://gist.github.com/RadoRado/24c2f804642b3e30afbaab8cd2fd08e2">
            following structure
          </a>
        </p>

        {file && (
          <p>
            Loaded {file.name} that is {file.type}
          </p>
        )}
        <FileReaderInput
          onFileDrop={this.onFileDrop}
          onFileRead={this.onFileRead}
        />
        {parseError && <pre>{parseError.toString()}</pre>}
        {data && <Table tableData={data} />}
      </div>
    );
  }
}

export default App;
