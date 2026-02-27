import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Services.css';


const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: '🎨',
      title: 'Web Design',
      category: 'Design',
      description: 'Creating visually stunning and user-centric designs that captivate your audience and elevate your brand presence.',
      features: [
        'UI/UX Design',
        'Responsive Design',
        'Brand Identity',
        'Design Systems',
        'Prototyping',
        'Wireframing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      category: 'Development',
      description: 'Building robust, scalable, and high-performance web applications using cutting-edge technologies and best practices.',
      features: [
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'Database Design',
        'Progressive Web Apps',
        'Single Page Applications'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js']
    },
    {
      id: 2,
      icon: '☁️',
      title: 'Cloud Solutions',
      category: 'Cloud',
      description: 'Deploying and managing scalable cloud infrastructure that ensures optimal performance, security, and reliability.',
      features: [
        'Cloud Architecture',
        'DevOps & CI/CD',
        'Container Orchestration',
        'Cloud Migration',
        'Serverless Computing',
        'Infrastructure as Code'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile Development',
      category: 'Development',
      description: 'Crafting native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'Mobile UI/UX',
        'App Store Optimization',
        'Push Notifications'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO & Analytics',
      category: 'Marketing',
      description: 'Optimizing your digital presence for search engines and providing actionable insights through comprehensive analytics.',
      features: [
        'Technical SEO',
        'Content Optimization',
        'Performance Monitoring',
        'Conversion Tracking',
        'Keyword Research',
        'Competitor Analysis'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console']
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Security & Maintenance',
      category: 'Support',
      description: 'Ensuring your digital assets remain secure, up-to-date, and performing at their best with ongoing support.',
      features: [
        'Security Audits',
        'SSL Implementation',
        'Regular Updates',
        '24/7 Monitoring',
        'Backup Solutions',
        'Performance Optimization'
      ],
      technologies: ['CloudFlare', 'Let\'s Encrypt', 'Datadog', 'New Relic']
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <div className="s-badge hero-animate delay-1">
            <span className="s-badge-icon">⚡</span>
            <span>Design • Development • Cloud</span>
          </div>
          <h1 className="hero-title hero-animate delay-2">
            Our <span className="highlight">Services</span>
          </h1>
          <p className="hero-subtitle hero-animate delay-3">
            Comprehensive digital solutions tailored to transform your ideas into 
            powerful digital experiences that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="content-wrapper">
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-category">{service.category}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Process Section */}
      <section className="process-section">
        <div className="content-wrapper">
          <h2 className="section-title">Our Development Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Discovery & Planning</h4>
                <p>
                  We begin by understanding your vision, goals, and requirements. 
                  Through comprehensive research and planning, we create a strategic 
                  roadmap for your project.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Design & Prototyping</h4>
                <p>
                  Our design team crafts intuitive interfaces and engaging user 
                  experiences. We create interactive prototypes to visualize the 
                  final product before development begins.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Development & Testing</h4>
                <p>
                  Using agile methodologies, we build your solution with clean, 
                  maintainable code. Rigorous testing ensures everything works 
                  flawlessly across all platforms and devices.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Launch & Support</h4>
                <p>
                  We handle the deployment and provide ongoing support to ensure 
                  your solution continues to perform optimally. Regular updates 
                  and maintenance keep your platform secure and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="content-wrapper">
          <h2 className="section-title">Why Choose DevSpectra</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>
                Optimized performance and blazing-fast load times for exceptional 
                user experiences.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h4>Secure & Reliable</h4>
              <p>
                Enterprise-grade security measures and 99.9% uptime guarantee for 
                peace of mind.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h4>Scalable Solutions</h4>
              <p>
                Built to grow with your business, handling increased traffic and 
                expanding features seamlessly.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h4>Results Driven</h4>
              <p>
                Data-driven approach focused on achieving measurable business outcomes 
                and ROI.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h4>Innovative Tech</h4>
              <p>
                Leveraging the latest technologies and frameworks to keep you ahead 
                of the competition.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h4>Dedicated Support</h4>
              <p>
                24/7 customer support and dedicated account management for ongoing 
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="tech-showcase-section">
        <div className="content-wrapper">
          <h2 className="section-title">Technologies We Master</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-items">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Vue.js</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-items">
                <span>Node.js</span>
                <span>Python</span>
                <span>GraphQL</span>
                <span>REST APIs</span>
                <span>Microservices</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Database</h4>
              <div className="tech-items">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>MySQL</span>
                <span>DynamoDB</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Cloud & DevOps</h4>
              <div className="tech-items">
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
                <span>Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help bring your vision to life with our 
              comprehensive digital solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;