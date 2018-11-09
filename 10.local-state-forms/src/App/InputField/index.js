import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './styles.css';

class InputField extends React.Component {
  render() {
    const {label, value, type, onChange, errors} = this.props;
    return (
      <div className={classNames('InputField', {errors: !_.isEmpty(errors)})}>
        <label>{label}</label>
        <input value={value} type={type} onChange={onChange} />
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
