import React from 'react';

class FileReaderInput extends React.Component {
  handleFileSelect = event => {
    const {onFileDrop, onFileRead} = this.props;

    const file = event.target.files[0];

    if (onFileDrop) {
      onFileDrop(file);
    }

    const reader = new FileReader();

    reader.onload = onLoadEvent => {
      // This is the parsed file, represented as string
      if (onFileRead) {
        onFileRead(onLoadEvent.target.result);
      }
    };

    reader.readAsText(file);
  };

  render() {
    return <input type="file" onChange={this.handleFileSelect} />;
  }
}

export default FileReaderInput ;
