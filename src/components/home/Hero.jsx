import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Digital Solutions";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = fullText;

      setTypedText(
        isDeleting
          ? current.substring(0, typedText.length - 1)
          : current.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">Design • Development • Cloud</span>
          </div>

          <h1 className="hero-title slide-in-left">
            We Build
            <span className="hero-gradient-text"> Innovative</span>
            <br />
            <span className="hero-typed-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-description slide-in-left">
            Transforming ideas into powerful digital experiences with cutting-edge
            technology and creative excellence. We craft solutions that drive growth
            and innovation for businesses worldwide.
          </p>

          {/* CTA */}
          <div className="hero-cta slide-in-left">
            <Link to="/contact" className="btn btn-primary">
              <span className="btn-text">Start Your Project</span>
              <span className="btn-icon">→</span>
            </Link>

            <Link to="/portfolio" className="btn btn-secondary">
              <span className="btn-text">View Portfolio</span>
              <span className="btn-icon">↗</span>
            </Link>
          </div>

          {/*<div className="hero-stats slide-in-left">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>*/}
        </div>

        {/* Right visual */}
        <div className="hero-visual slide-in-right">
          <div className="visual-container">
            <div className="visual-card visual-card-1">
              <div className="card-header">
                <span className="card-dot"></span>
                <span className="card-dot"></span>
                <span className="card-dot"></span>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">innovation</span>{" "}
                  <span className="code-operator">=</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"DevSpectra"</span>;
                </div>
              </div>
            </div>

            <div className="visual-card visual-card-2">
              <div className="tech-badge">React</div>
              <div className="tech-badge">Node.js</div>
              <div className="tech-badge">AWS</div>
            </div>

            <div className="visual-circle visual-circle-1"></div>
            <div className="visual-circle visual-circle-2"></div>
          </div>
        </div>
      </div>

      {/*<div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>*/}
    </section>
  );
};

export default Hero;