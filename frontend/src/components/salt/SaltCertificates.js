import React from 'react';

const SaltCertificates = () => {
  return (
    <div className="salt-certificates">
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>
        <div className="certificates-wrapper">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaltCertificates;
