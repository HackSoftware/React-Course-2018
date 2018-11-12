import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import SelectField from '../SelectField';
import InputField from '../InputField';

import './styles.css';

class BookingRequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialFields = {
      name: {
        value: '',
        errors: []
      },
      email: {
        value: '',
        errors: []
      },
      start: {
        value: '',
        errors: []
      },
      end: {
        value: '',
        errors: []
      },
      roomType: {
        value: '',
        errors: []
      }
    };
    this.state = {
      form: {
        fields: {
          ...this.initialFields
        }
      },
      roomTypes: [],
      errorMessage: '',
      successMessage: ''
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8000/booking/room-types/';
    axios.get(url).then(response => {
      const roomTypes = response.data;

      this.setState({roomTypes});
    });
  }

  updateState = (path, value) => {
    this.setState(state => {
      const newState = _.cloneDeep(state);
      const stateWithChangedField = _.set(newState, path, value);

      return stateWithChangedField;
    });
  };

  getFieldValue = path => _.get(this.state, path);

  setFieldErrors = responseData => {
    this.setState(state => {
      let form = _.cloneDeep(this.state.form);
      _.forEach(responseData, (value, key) => {
        _.set(form, `fields.${key}.errors`, value);
      });

      return {form};
    });
  };

  handleNameChange = event => {
    const nameValue = event.target.value;

    this.updateState('form.fields.name.value', nameValue);
  };

  handleEmailChange = event => {
    const emailValue = event.target.value;

    this.updateState('form.fields.email.value', emailValue);
  };

  handleStartChange = event => {
    const startValue = event.target.value;

    this.updateState('form.fields.start.value', startValue);
  };

  handleEndChange = event => {
    const endValue = event.target.value;

    this.updateState('form.fields.end.value', endValue);
  };

  handleRoomTypeChange = event => {
    const roomTypeValue = event.target.value;

    this.updateState('form.fields.roomType.value', roomTypeValue);
  };

  handleSubmit = () => {
    const {
      form: {
        fields: {name, email, start, end, roomType}
      }
    } = this.state;

    const url = 'http://localhost:8000/booking/booking-request/';
    const payload = {
      name: name.value,
      email: email.value,
      start: start.value,
      end: end.value,
      roomType: roomType.value
    };

    axios
      .post(url, payload)
      .then(response => {
        // TODO: Clear all field and non field errors

        this.setState({successMessage: 'Booking request submitted'});
      })
      .catch(errors => {
        this.setFieldErrors(errors.response.data);
      });
  };

  handleClear = () => {
    this.updateState('form.fields', this.initialFields);
  };

  render() {
    const {
      errorMessage,
      successMessage,
      form: {
        fields: {name, email, start, end}
      },
      roomTypes
    } = this.state;

    return (
      <div>
        {errorMessage && <div>{errorMessage}</div>}
        {successMessage && <div>{successMessage}</div>}

        <form className="BookingRequestForm">
          <div className="nameAndEmail">
            <InputField
              label="Name"
              type="text"
              value={name.value}
              onChange={this.handleNameChange}
              errors={name.errors}
            />

            <InputField
              label="Email"
              type="email"
              value={email.value}
              onChange={this.handleEmailChange}
              errors={email.errors}
            />
          </div>
          <div className="dates">
            <InputField
              label="Start"
              type="date"
              value={start.value}
              onChange={this.handleStartChange}
              errors={start.errors}
            />
            <InputField
              label="End"
              type="date"
              value={end.value}
              onChange={this.handleEndChange}
              errors={end.errors}
            />
          </div>

          <SelectField
            label="Room Type"
            onChange={this.handleRoomTypeChange}
            options={roomTypes}
          />

          <button type="button" onClick={this.handleSubmit}>
            Request Booking
          </button>

          <button type="button" onClick={this.handleClear}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default BookingRequestForm;
