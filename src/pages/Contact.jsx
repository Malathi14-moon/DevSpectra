import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact page-transition">
      <div className="container">
        <section className="section">
          <h1 className="gradient-text">Get In Touch</h1>
          
          
          <section className="contact-section" >
      <h2>Start Your Project</h2>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />

        <select required>
          <option value="">Select Budget</option>
          <option>₹10,000 – ₹50,000</option>
          <option>₹50,000 – ₹1,00,000</option>
          <option>₹1,00,000+</option>
        </select>

        <textarea placeholder="Project Brief" rows="5" required />

        <button type="submit">Submit</button>
        </form>
         </section>

        </section>
      </div>
    </div>
  );
};

export default Contact;
