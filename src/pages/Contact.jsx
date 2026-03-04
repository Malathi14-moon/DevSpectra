/*import React from 'react';
import './Contact.css';





const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    projectBrief: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-vercel-backend-url/contact", formData);
      alert("Form submitted successfully ✅");
      setFormData({ name: "", email: "", phone: "", budget: "", projectBrief: "" });
    } catch (error) {
      alert("Error submitting form ❌");
    }

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

export default Contact;*/




import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    projectBrief: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.get("https://devspectra-qnwe.onrender.com/").catch(() => {});

    
    try {
      console.log("📤 Sending form data:", formData);
      const response = await axios.post(
        "https://devspectra-qnwe.onrender.com/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("✅ Response:", response.data);
      alert("Form submitted successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        projectBrief: ""
      });
    } catch (error) {
      alert("Error submitting form ❌");
    }
  };

  return (
    <div className="contact page-transition">
      <div className="container">
        <section className="section">
          <h1 className="gradient-text">Get In Touch</h1>

          <section className="contact-section">
            <h2>Start Your Project</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select Budget</option>
                <option>₹10,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>

              <textarea
                name="projectBrief"
                placeholder="Project Brief"
                rows="5"
                value={formData.projectBrief}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Contact;
