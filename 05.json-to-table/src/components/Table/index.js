import React from 'react';

import './styles.css';

class Table extends React.Component {
  render() {
    const {tableData} = this.props;

    const {headers, data} = tableData;

    const tableBody = data.map(item => {
      return headers.map(header => {
        return item[header];
      });
    });

    return (
      <table className="Table">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map(row => (
            <tr>
              {row.map(item => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
