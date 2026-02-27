import React from 'react';
import './About.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="a-badge hero-animate delay-1">
            <span className="a-badge-icon">⚡</span>
            <span>About Us</span>
          </div>
          <h1 className="hero-title hero-animate delay-2">
            Crafting Digital <span className="highlight">Excellence</span>
          </h1>
          <p className="hero-subtitle hero-animate delay-3">
            DevSpectra is a cutting-edge web development and digital solutions company 
            dedicated to transforming ideas into powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="content-wrapper">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <div className='story-content-text'>
            <p>
              Founded with a vision to bridge the gap between innovation and implementation, 
              DevSpectra has been at the forefront of digital transformation. We believe in 
              the power of technology to reshape businesses and create meaningful connections 
              with audiences worldwide.
            </p>
            <p>
              Our journey began with a simple mission: to deliver exceptional digital solutions 
              that not only meet but exceed our clients' expectations. Today, we stand as a 
              trusted partner for businesses looking to navigate the digital landscape with 
              confidence and creativity.
            </p>
          </div>
          <div className='story-content img'>
             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="story-img" />
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="content-wrapper">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value. We strive to be the 
                catalyst for digital transformation across industries.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading force in digital innovation, recognized globally for our 
                commitment to excellence, creativity, and technological advancement. We 
                envision a future where every business can harness the full potential of 
                digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="content-wrapper">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h4>Innovation</h4>
              <p>
                We embrace cutting-edge technologies and creative thinking to deliver 
                solutions that set new standards in the industry.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h4>Excellence</h4>
              <p>
                Quality is not just a goal; it's our standard. We pursue perfection in 
                every line of code and every pixel of design.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h4>Collaboration</h4>
              <p>
                We believe in the power of partnership. Working closely with our clients, 
                we create solutions that truly reflect their vision.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h4>Integrity</h4>
              <p>
                Transparency and honesty guide everything we do. We build trust through 
                consistent, ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="content-wrapper">
          <h2 className="section-title">What We Do Best</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="code-window">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <code>
                    <span className="code-keyword">const</span> design = <br/>
                    &nbsp;&nbsp;<span className="code-string">"Creative"</span>;
                  </code>
                </div>
              </div>
              <h4>Design</h4>
              <p>User-centric designs that captivate and engage</p>
            </div>
            <div className="expertise-card">
              <div className="code-window">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <code>
                    <span className="code-keyword">const</span> dev = <br/>
                    &nbsp;&nbsp;<span className="code-string">"Powerful"</span>;
                  </code>
                </div>
              </div>
              <h4>Development</h4>
              <p>Robust, scalable solutions built with modern tech</p>
            </div>
            <div className="expertise-card">
              <div className="code-window">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <code>
                    <span className="code-keyword">const</span> cloud = <br/>
                    &nbsp;&nbsp;<span className="code-string">"Scalable"</span>;
                  </code>
                </div>
              </div>
              <h4>Cloud</h4>
              <p>Cloud infrastructure for seamless performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <div className="content-wrapper">
          <h2 className="section-title">Technologies We Master</h2>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Kubernetes</span>
            <span className="tech-tag">GraphQL</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Microservices</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let's collaborate to create something extraordinary. Your vision, 
              our expertise – together, we'll build the future.
            </p>
            <div className="cta-buttons">
              {/*<button className="btn-primary">Start Your Project →</button>*/}

              <Link to="/Contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/portfolio" className="btn-secondary">View Portfolio ↗</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
