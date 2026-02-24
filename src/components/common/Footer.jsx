import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from "../../assets/logoImg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions'
  ];

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'GH' },
    { name: 'LinkedIn', url: '#', icon: 'LI' },
    { name: 'Twitter', url: '#', icon: 'TW' },
    { name: 'Dribbble', url: '#', icon: 'DR' }
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              
              <span className="logo-text">Devspectra</span>
            
            </div>
            <p className="footer-tagline">
              Crafting digital experiences with cutting-edge technology and creative innovation.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <span className="link-arrow">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="footer-link">
                    <span className="link-arrow">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                connect@devspectra.in
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                +91 96009 41222
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                DevSpectra • Chennai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} <span className="gradient-text">DevSpectra</span>. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms" className="footer-bottom-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
