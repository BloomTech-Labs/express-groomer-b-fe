import React, { useState, useContext } from 'react';
import { APIContext } from '../../state/contexts/APIContext';
import { useOktaAuth } from '@okta/okta-react';

const ApptForm = props => {
  const { addAppointment } = useContext(APIContext);
  const { authState } = useOktaAuth();
  const [form, setForm] = useState({ date: '', time: '' });
  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    addAppointment(authState, form);
    props.setIsModalVisible(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChanges}
        />
      </label>
      <label>
        Time
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChanges}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ApptForm;
