import React, { useContext } from 'react';
import './TwilioForm.scss';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { Container, Form, Button } from 'react-bootstrap';

export default function TwilioForm() {
  const { twilioGroomer, setTwilioGroomer } = useContext(GroomersContext);
  const { twilioSubmit } = useContext(FormContext);

  const { onSubmit } = useContext(APIContext);

  const submit = e => {
    e.preventDefault();
    onSubmit();
  };

  const onHandleChange = e => {
    console.log(e.target.name);
    setTwilioGroomer({
      ...twilioGroomer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <h2>Send SMS To Customer</h2>
      <form onSubmit={submit} className="sms-form">
        <Form.Group>
          <Form.Label>To:</Form.Label>
          <input
            type="tel"
            name="to"
            id="to"
            placeholder="Please Enter Customer Phone Number"
            value={twilioGroomer.to || ''}
            onChange={onHandleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body:</Form.Label>
          <textarea
            type="body"
            name="body"
            id="body"
            placeholder="Please Enter Appointment Reminder with Customer Name, Date, and Time of the Appointment, and add at the end of message: Reply NO to cancel or to reschedule your Appointment. Reply CANCEL to unsubscribe."
            value={twilioGroomer.body}
            onChange={onHandleChange}
          />
        </Form.Group>
        <Button type="submit" checked={twilioSubmit}>
          Send Message
        </Button>
      </form>
      {console.log(
        `Phone Number is ${twilioGroomer.to} and the Text Message is ${twilioGroomer.body}`
      )}
    </Container>
  );
}
