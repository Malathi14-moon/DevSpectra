import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'cloud', label: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '💰',
      description: 'A comprehensive financial analytics dashboard for managing investments and tracking portfolio performance in real-time.',
      challenge: 'Creating a real-time data visualization system that handles millions of transactions while maintaining optimal performance.',
      solution: 'Implemented WebSocket connections for live updates, optimized database queries, and used React virtualization for efficient rendering.',
      results: [
        '40% faster load times',
        '99.9% uptime achieved',
        'Handles 10M+ daily transactions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'AWS'],
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'web',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: '🛒',
      description: 'Modern e-commerce platform with seamless checkout experience, inventory management, and advanced analytics.',
      challenge: 'Building a scalable platform that handles high traffic during peak shopping seasons without compromising user experience.',
      solution: 'Leveraged Next.js for server-side rendering, implemented CDN caching, and optimized database connections for concurrent users.',
      results: [
        '300% increase in conversions',
        'Sub-second page loads',
        '50K concurrent users supported'
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Health API'],
      image: '🏥',
      description: 'Cross-platform mobile application connecting patients with healthcare providers for virtual consultations.',
      challenge: 'Ensuring HIPAA compliance while providing seamless video consultation features across iOS and Android platforms.',
      solution: 'Implemented end-to-end encryption, secure data storage, and integrated WebRTC for high-quality video calls.',
      results: [
        '100K+ active users',
        'HIPAA compliant',
        '4.8 star rating'
      ],
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'AWS'],
      link: '#'
    },
    {
      id: 4,
      title: 'SaaS Design System',
      category: 'design',
      tags: ['Figma', 'Design Tokens', 'Component Library'],
      image: '🎨',
      description: 'Comprehensive design system and component library for a enterprise SaaS platform.',
      challenge: 'Creating a cohesive design language that scales across multiple products while maintaining consistency.',
      solution: 'Developed a token-based design system with reusable components, comprehensive documentation, and automated style updates.',
      results: [
        '60% faster design process',
        '200+ reusable components',
        'Adopted by 15+ product teams'
      ],
      technologies: ['Figma', 'Design Tokens', 'Storybook', 'React', 'TypeScript'],
      link: '#'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Migration',
      category: 'cloud',
      tags: ['AWS', 'Kubernetes', 'Docker'],
      image: '☁️',
      description: 'Complete cloud infrastructure migration from on-premise to AWS with zero downtime.',
      challenge: 'Migrating legacy systems to cloud infrastructure without service interruption or data loss.',
      solution: 'Implemented blue-green deployment strategy, containerized applications, and automated CI/CD pipelines.',
      results: [
        '70% cost reduction',
        'Zero downtime migration',
        '5x faster deployments'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'web',
      tags: ['Vue.js', 'Python', 'Machine Learning'],
      image: '📊',
      description: 'AI-powered social media analytics platform providing insights and sentiment analysis.',
      challenge: 'Processing and analyzing millions of social media posts in real-time with accurate sentiment detection.',
      solution: 'Built scalable microservices architecture with ML models for sentiment analysis and trend prediction.',
      results: [
        '95% sentiment accuracy',
        'Analyzes 5M posts/day',
        '200+ enterprise clients'
      ],
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      link: '#'
    },
    {
      id: 7,
      title: 'Fitness Tracking App',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'Wearables'],
      image: '💪',
      description: 'Cross-platform fitness app with wearable integration and personalized workout plans.',
      challenge: 'Creating seamless synchronization between multiple wearable devices and providing real-time health insights.',
      solution: 'Integrated with major wearable APIs, implemented offline-first architecture, and built custom analytics engine.',
      results: [
        '500K+ downloads',
        'Integrates 20+ devices',
        '4.7 star average rating'
      ],
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'Node.js'],
      link: '#'
    },
    {
      id: 8,
      title: 'Brand Identity Redesign',
      category: 'design',
      tags: ['Brand Design', 'UI/UX', 'Motion Design'],
      image: '🎯',
      description: 'Complete brand identity redesign for a leading tech startup including logo, guidelines, and digital assets.',
      challenge: 'Modernizing brand identity while maintaining recognition and appealing to both B2B and B2C audiences.',
      solution: 'Conducted extensive market research, created multiple design iterations, and developed comprehensive brand guidelines.',
      results: [
        '85% brand recognition',
        '40% increase in engagement',
        'Award-winning design'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'After Effects', 'Illustrator'],
      link: '#'
    },
    {
      id: 9,
      title: 'Serverless API Platform',
      category: 'cloud',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
      image: '⚡',
      description: 'Highly scalable serverless API platform handling millions of requests with minimal latency.',
      challenge: 'Building a cost-effective solution that automatically scales based on demand without managing servers.',
      solution: 'Architected serverless infrastructure using AWS Lambda, implemented API Gateway for routing, and optimized DynamoDB queries.',
      results: [
        '90% cost savings',
        'Auto-scales to demand',
        'Sub-100ms response time'
      ],
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudFront', 'S3'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-content">
          <div className="badge hero-animate delay-1">
            <span className="badge-icon">⚡</span>
            <span>Our Work</span>
          </div>
          <h1 className="hero-title hero-animate delay-2">
            Project <span className="highlight">Portfolio</span>
          </h1>
          <p className="hero-subtitle hero-animate delay-3">
            Showcasing our commitment to excellence through innovative solutions 
            that drive real business results for clients worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
     {/*} <section className="stats-section">
        <div className="content-wrapper">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Filter Section */}
      <section className="filter-section">
        <div className="content-wrapper">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="content-wrapper">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <button className="view-project-btn">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="content-wrapper">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                DevSpectra transformed our digital presence completely. Their team's 
                expertise in modern web technologies and cloud solutions helped us 
                scale efficiently and reach new markets.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <div className="author-name">John Davidson</div>
                  <div className="author-title">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Working with DevSpectra was a game-changer. They delivered a 
                beautiful, performant application that exceeded our expectations. 
                The attention to detail was remarkable.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div>
                  <div className="author-name">Sarah Martinez</div>
                  <div className="author-title">Founder, HealthPlus</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The cloud migration was seamless. DevSpectra's team handled 
                everything professionally, with zero downtime. Our infrastructure 
                is now more reliable and cost-effective.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RK</div>
                <div>
                  <div className="author-name">Robert Kim</div>
                  <div className="author-title">CTO, DataFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Ready to transform your idea into a powerful digital solution? 
              Our team is here to help you succeed.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/contact" className="btn-secondary">Schedule a Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.image}</div>
              <div>
                <h2>{selectedProject.title}</h2>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-section">
                <h3>The Challenge</h3>
                <p>{selectedProject.challenge}</p>
              </div>
              <div className="modal-section">
                <h3>Our Solution</h3>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="modal-section">
                <h3>Results</h3>
                <div className="results-grid">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <span className="result-check">✓</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-primary">Contact Us About This Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
