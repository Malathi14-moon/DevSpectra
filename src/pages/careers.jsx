import { useState } from "react";

import './careers.css';
import axios from "axios";


const Careers = () => {
  const [showGeneralApplication, setShowGeneralApplication] = useState(false);

  const [selectedJob, setSelectedJob] = useState(null);
  const [description, setDescription] = useState("");
  





  const [resume, setResume] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  



const handleResumeSubmit = async (e) => {
  e.preventDefault();

  if (!resume || !name || !email || !phone) {
    alert("Please fill all fields and upload resume");
    return;
  }

  const formData = new FormData();
  formData.append("resume", resume);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("description", description);


  try {
    setLoading(true);

    await axios.post(
      "http://localhost:5000/send-application",
      formData
    );

    alert("Resume sent to HR successfully ✅");
    setShowGeneralApplication(false);

    setResume(null);
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Server error ❌");
  } finally {
    setLoading(false);
  }
};



 

  const perks = [
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with our remote-first culture and flexible schedules'
    },
   

    {
      icon: '📚',
      title: 'Learning & Growth',
      description: 'Annual learning budget for courses, conferences, and certifications'
    },
    {
      icon: '💻',
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies and top-of-the-line equipment'
    },
   
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in teamwork and open communication across all levels of the organization'
    },
    {
      icon: '📈',
      title: 'Continuous Growth',
      description: 'We invest in our people\'s development and provide opportunities for career advancement'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'We value your personal time and promote a healthy balance between work and life'
    }
  ];

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <div className='careers-overlay'>
      <section className="careers-hero">
        <div className="hero-content">
          <div className="badge hero-animate delay-1">
            <span className="badge-icon">⚡</span>
            <span>Join Our Team</span>
          </div>
          <h1 className="hero-title hero-animate delay-2">
            Build Your <span className="highlight">Career</span> With Us
          </h1>
          <p className="hero-subtitle hero-animate delay-3">
            Join a team of passionate innovators creating cutting-edge digital 
            solutions that transform businesses worldwide.
          </p>
        </div>
      </section>
      </div>

      {/* Why Join Section */}

      <section className="why-join-section">
        <div className="content-wrapper">
          <h2 className="section-title">Why DevSpectra?</h2>
          {/*<p className="section-description">
            At DevSpectra, we're not just building software – we're building careers. 
            We foster a culture of innovation, collaboration, and continuous learning 
            where every team member can thrive and make an impact.
          </p>*/}
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
      

      </div>
      </section>




    



    





     




      {/* Perks Section */}
      <section className="perks-section">
        <div className="content-wrapper">
          <h2 className="section-title">Perks & Benefits</h2>
          <div className="perks-grid">
            {perks.map((perk, index) => (
              <div key={index} className="perk-card">
                <div className="perk-icon">{perk.icon}</div>
                <h4>{perk.title}</h4>
                <p>{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Culture Section */}
      <section className="culture-section">
        <div className="content-wrapper">
          <h2 className="section-title">Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-number">01</div>
              <h4>Diverse & Inclusive</h4>
              <p>
                We celebrate diversity and create an inclusive environment where 
                everyone feels valued and respected.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-number">02</div>
              <h4>Innovation Driven</h4>
              <p>
                We encourage experimentation and provide the freedom to explore 
                new ideas and technologies.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-number">03</div>
              <h4>Transparent Communication</h4>
              <p>
                Open and honest communication at all levels fosters trust and 
                collaboration across teams.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-number">04</div>
              <h4>Impact Focused</h4>
              <p>
                Your work matters. We build products that solve real problems 
                and make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      




<section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Don't See a Perfect Fit?</h2>
            <p>
              We're always looking for talented individuals.  
              Send us your resume and let's talk!
            </p>

            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => setShowGeneralApplication(true)}
              >
                Send General Application
              </button>

              <button className="btn-secondary">Contact HR Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ General Application Modal */}
      {showGeneralApplication && (
        <section className="general-application-section">
          <div className="general-application-card">

            <button
              className="close-btn"
              onClick={() => setShowGeneralApplication(false)}
            >
              ✕
            </button>

            <h2>General Application</h2>
            <p>Upload your resume and our HR team will contact you.</p>

            <form onSubmit={handleResumeSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />



              <textarea
  placeholder="Brief description about yourself"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  rows="4"
  required
/>

              <label className="file-upload-btn">
                Choose Resume
                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                />
              </label>

              {resume && <p className="file-name">{resume.name}</p>}

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Application"}
              </button>
            </form>
          </div>
        </section>
      )}







      {/* Job Details Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>
              ✕
            </button>
            <div className="modal-header">
              <h2>{selectedJob.title}</h2>
              <div className="modal-meta">
                <span className="meta-item">📍 {selectedJob.location}</span>
                <span className="meta-item">⏰ {selectedJob.type}</span>
                <span className="meta-item">💼 {selectedJob.experience}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>About the Role</h3>
                <p>{selectedJob.description}</p>
              </div>
              <div className="modal-section">
                <h3>Responsibilities</h3>
                <ul className="modal-list">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>Requirements</h3>
                <ul className="modal-list">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>What We Offer</h3>
                <ul className="modal-list">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-primary btn-large">Apply for This Position</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
