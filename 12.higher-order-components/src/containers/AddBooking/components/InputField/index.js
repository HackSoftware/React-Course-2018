import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './styles.css';

class InputField extends React.Component {
  onFieldChange = event => {
    const {name} = this.props;

    this.props.onChange(event);

    if (this.props.validators) {
      const result = this.props.validators
        .map(validator => validator(event.target.value))
        .filter(result => !result.valid)
        .map(error => error.message);

      this.props.updateSyncErrors(name, result);
    }
  };

  render() {
    const {label, value, type, errors, onBlur} = this.props;
    return (
      <div className={classNames('InputField', {errors: !_.isEmpty(errors)})}>
        <label>{label}</label>
        <input
          value={value}
          type={type}
          onChange={this.onFieldChange}
          onBlur={onBlur}
        />
        {errors &&
          errors.map((error, index) => (
            <div className="error" key={index}>
              {error}
            </div>
          ))}
      </div>
    );
  }
}

export default InputField;
