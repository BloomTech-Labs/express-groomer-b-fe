import React from 'react';

export default function TwilioForm() {
  return (
    <div className="container">
      <h2>Send SMS To Customer</h2>
      <form>
        <div>
          <label>To:</label>
          <input />
        </div>
        <div>
          <label>Body:</label>
          <textarea />
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
}
