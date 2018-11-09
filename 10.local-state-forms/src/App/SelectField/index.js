import React from 'react';

import './styles.css';

class SelectField extends React.Component {
  render() {
    const {label, onChange, options} = this.props;
    return (
      <div className="SelectField">
        <label>{label}</label>
        <select onChange={onChange}>
          {options.map(option => {
            return (
              <option className="error" key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectField;
