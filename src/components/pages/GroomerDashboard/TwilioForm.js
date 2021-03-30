import React, { useContext } from 'react';
import './TwilioForm.scss';
import * as Yup from 'yup';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { Container, Form, Button } from 'react-bootstrap';

export default function TwilioForm() {
  const {
    twilioGroomer,
    setTwilioGroomer,
    validateForm,
    setValidateForm,
  } = useContext(GroomersContext);
  const { twilioSubmit, twilioError } = useContext(FormContext);
  const { onSubmit } = useContext(APIContext);

  const phoneValidation = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formSchema = Yup.object().shape({
    to: Yup.string()
      .required('Please Enter Customer Phone Number')
      .matches(phoneValidation, 'Phone Number is not valid'),
    body: Yup.string().required(
      'Please Enter Appointment Reminder for Customer'
    ),
  });

  const validateChange = e => {
    e.persist();
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setValidateForm({
          ...validateForm,
          [e.target.name]: '',
        })
      )
      .catch(error =>
        setValidateForm({
          ...validateForm,
          [e.target.name]: error.errors[0],
        })
      );
  };

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
    validateChange(e);
  };

  return (
    <Container>
      <h2>Send SMS To Customer</h2>
      <form
        onSubmit={submit}
        className={twilioError ? 'catch-error sms-form' : 'sms-form'}
      >
        <Form.Group>
          <Form.Label>To:</Form.Label>
          <input
            type="tel"
            name="to"
            id="to"
            placeholder="Please Enter Customer Phone Number ex. +15632221111"
            value={twilioGroomer.to || ''}
            onChange={onHandleChange}
          />
          {validateForm.to.length !== 0 && (
            <p className="validate-form">{validateForm.to}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Body:</Form.Label>
          <textarea
            type="body"
            name="body"
            id="body"
            placeholder="Please Enter Appointment Reminder Text Message with Customer Name, Date, and Time of the Appointment, and add at the end of message: Reply NO to cancel or to reschedule your Appointment. Reply CANCEL to unsubscribe."
            value={twilioGroomer.body}
            onChange={onHandleChange}
          />
          {validateForm.body.length !== 0 && (
            <p className="validate-form">{validateForm.body}</p>
          )}
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
