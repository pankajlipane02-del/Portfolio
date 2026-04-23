import React, { useEffect, useRef } from "react";
import "./Services.css";

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      
      {/* 🔥 Glow Background */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <h2 className="services-title">✨ My Services</h2>
      <p className="services-sub">What I can build for you</p>

      <div className="services-container">

        <div className="service-card">
          <span className="icon">💻</span>
          <h3>Web Development</h3>
          <p>Modern responsive websites using React.js</p>
        </div>

        <div className="service-card">
          <span className="icon">🎨</span>
          <h3>UI/UX Design</h3>
          <p>Clean, attractive & user-friendly design</p>
        </div>

        <div className="service-card">
          <span className="icon">📱</span>
          <h3>App Development</h3>
          <p>Mobile-first web applications</p>
        </div>

        <div className="service-card">
          <span className="icon">⚙️</span>
          <h3>Backend</h3>
          <p>API integration & database handling</p>
        </div>

      </div>
    </section>
  );
}

export default Services;