import { useEffect, useRef, useState } from "react";

import './careers.css';
import axios from "axios";


const Careers = () => {
  const [showGeneralApplication, setShowGeneralApplication] = useState(false);

  const [selectedJob, setSelectedJob] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');





  const [resume, setResume] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  {/*const handleResumeSubmit = async () => {
  if (!resume || !name || !email || !phone) {
    alert("Please fill all fields and upload resume");
    return;
  }

  const formData = new FormData();
  formData.append("resume", resume);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);

  try {
    setLoading(true);
    await axios.post(
      "http://localhost:5000/send-application",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    alert("Resume sent to HR successfully!");
    setShowGeneralApplication(false);

    // reset form
    setResume(null);
    setName("");
    setEmail("");
    setPhone("");
  } catch (error) {
    alert("Failed to send resume");
  } finally {
    setLoading(false);
  }
};
*/}



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
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Server error ❌");
  } finally {
    setLoading(false);
  }
};






  {/*const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };*/}



  /* animation why <join>*/

 







  const categories = [
    { id: 'all', label: 'All Positions' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'product', label: 'Product' },
    { id: 'business', label: 'Business' }
  ];

 {/*} const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      category: 'engineering',
      location: 'Remote / Chennai, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.',
      responsibilities: [
        'Design and develop high-quality web applications',
        'Collaborate with cross-functional teams to define and ship new features',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and mentor junior developers',
        'Optimize applications for maximum speed and scalability',
        'Stay up-to-date with emerging technologies and industry trends'
      ],
      requirements: [
        '5+ years of experience in full stack development',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Solid understanding of RESTful APIs and microservices',
        'Experience with SQL and NoSQL databases',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible working hours and remote work',
        'Health insurance and wellness programs',
        'Learning and development budget',
        'Latest tech equipment',
        'Team outings and events'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      category: 'design',
      location: 'Remote / Chennai, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our web and mobile applications. Work closely with product and engineering teams.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Conduct user research and usability testing',
        'Develop and maintain design systems and component libraries',
        'Collaborate with developers to ensure design implementation',
        'Present design concepts to stakeholders'
      ],
      requirements: [
        '3+ years of experience in UI/UX design',
        'Proficiency in Figma, Adobe XD, or Sketch',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design principles',
        'Experience with design systems and component libraries',
        'Good communication and presentation skills'
      ],
      benefits: [
        'Competitive salary package',
        'Flexible work arrangements',
        'Creative freedom and autonomy',
        'Access to design tools and resources',
        'Conference and workshop attendance',
        'Collaborative work environment'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      category: 'engineering',
      location: 'Remote / Chennai, India',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure high availability of our applications.',
      responsibilities: [
        'Design and implement cloud infrastructure solutions',
        'Build and maintain CI/CD pipelines',
        'Monitor system performance and troubleshoot issues',
        'Implement security best practices and compliance',
        'Automate deployment and scaling processes',
        'Collaborate with development teams on infrastructure needs'
      ],
      requirements: [
        '4+ years of experience in DevOps or similar role',
        'Strong experience with AWS, Docker, and Kubernetes',
        'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Knowledge of scripting languages (Python, Bash)',
        'Understanding of security and compliance requirements'
      ],
      benefits: [
        'Competitive compensation',
        'Remote-first culture',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Stock options',
        'Cutting-edge technology stack'
      ]
    },
    {
      id: 4,
      title: 'Product Manager',
      category: 'product',
      location: 'Chennai, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap development. Work with engineering, design, and business teams to deliver exceptional products.',
      responsibilities: [
        'Define product vision, strategy, and roadmap',
        'Gather and prioritize product requirements',
        'Work closely with engineering and design teams',
        'Conduct market research and competitive analysis',
        'Define and track key product metrics',
        'Communicate product updates to stakeholders'
      ],
      requirements: [
        '5+ years of product management experience',
        'Strong understanding of software development lifecycle',
        'Experience with Agile/Scrum methodologies',
        'Excellent analytical and problem-solving skills',
        'Strong communication and leadership abilities',
        'Technical background is a plus'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Equity participation',
        'Flexible working hours',
        'Health insurance',
        'Professional growth opportunities',
        'Dynamic team environment'
      ]
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      category: 'engineering',
      location: 'Remote / Chennai, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and performant mobile applications for iOS and Android using React Native or Flutter.',
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Integrate with backend APIs and third-party services',
        'Optimize app performance and user experience',
        'Write unit and integration tests',
        'Participate in app store submission process',
        'Debug and fix issues reported by users'
      ],
      requirements: [
        '3+ years of mobile app development experience',
        'Proficiency in React Native or Flutter',
        'Experience with iOS and Android platforms',
        'Knowledge of mobile UI/UX best practices',
        'Understanding of RESTful APIs',
        'Strong debugging and problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Remote work flexibility',
        'Latest devices for testing',
        'Learning resources and courses',
        'Health benefits',
        'Team collaboration tools'
      ]
    },
    {
      id: 6,
      title: 'Business Development Manager',
      category: 'business',
      location: 'Chennai, India',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive business growth by identifying new opportunities, building client relationships, and closing deals.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Prepare and deliver sales presentations',
        'Negotiate contracts and close deals',
        'Collaborate with internal teams on proposals',
        'Track sales metrics and report on performance'
      ],
      requirements: [
        '4+ years in business development or sales',
        'Experience in IT services or software industry',
        'Strong networking and relationship-building skills',
        'Excellent presentation and negotiation abilities',
        'Self-motivated and results-driven',
        'Bachelor\'s degree in Business or related field'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Performance bonuses',
        'Flexible schedule',
        'Travel opportunities',
        'Professional development',
        'Collaborative culture'
      ]
    }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);*/}

  const perks = [
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with our remote-first culture and flexible schedules'
    },
   /* {
      icon: '💰',
      title: 'Competitive Pay',
      description: 'Industry-leading salaries with equity options and performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health insurance coverage for you and your family'
    },*/

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
   /* {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team outings, hackathons, and celebration events'
    }*/
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

      {/* Open Positions Section */}
     {/*} <section className="positions-section">
        <div className="content-wrapper">
          <h2 className="section-title">Open Positions</h2>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="job-card"
                onClick={() => setSelectedJob(job)}
              >
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-location">📍 {job.location}</span>
                      <span className="job-type">⏰ {job.type}</span>
                      <span className="job-experience">💼 {job.experience}</span>
                    </div>
                  </div>
                  <button className="apply-btn">
                    View Details →
                  </button>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

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

      {/* CTA Section */}
     {/* <section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Don't See a Perfect Fit?</h2>
            <p>
              We're always looking for talented individuals who are passionate 
              about technology and innovation. Send us your resume and let's talk!
            </p>
            <div className="cta-buttons">
              {/*<button className="btn-primary">Send General Application</button>

              <button className="btn-primary"onClick={() => setShowGeneralApplication(true)}>Send General Application
              </button>



              <button className="btn-secondary">Contact HR Team</button>
            </div>
          </div>
        </div>
      </section>*/}



    {/*  {showGeneralApplication && (
  <section className="general-application-section">
    <div className="general-application-card">
      <h2>Open for Web Developers:</h2>
      <p>
        We are looking for candidates with basic knowledge in MERN Stack,
        Django, and API Integration. If you are interested to join us,
        upload your CV below.
      </p>

      <label className="resume-label">Resume:</label>
      {/*<input type="file" className="resume-input" />


      <label className="file-upload-btn">
  Choose Resume
  <input type="file" hidden />
</label>


      <button className="btn-primary submit-btn">
        Submit
      </button>
    </div>
  </section>
)}        */}





{/*{showGeneralApplication && (
  <section className="general-application-section">
    <div className="general-application-card">
      <h2>Open for Web Developers</h2>
      <p>
        Upload your resume and our HR team will contact you.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className="file-upload-btn">
        Choose Resume
        <input
          type="file"
          hidden
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
        />
      </label>

      {resume && <p className="file-name">{resume.name}</p>}

      <button
        className="btn-primary submit-btn"
        onClick={handleResumeSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </div>
  </section>
)}*/}






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
