import React from 'react';
import './TwilioForm.scss';
import { Container, Form, Button } from 'react-bootstrap';

export default function TwilioForm() {
  return (
    <Container>
      <h2>Send SMS To Customer</h2>
      <form className="sms-form">
        <Form.Group>
          <Form.Label>To:</Form.Label>
          <input />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body:</Form.Label>
          <textarea />
        </Form.Group>
        <Button>Send Message</Button>
      </form>
    </Container>
  );
}
