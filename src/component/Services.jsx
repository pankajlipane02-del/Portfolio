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

  const services = [
    { icon: "💻", title: "Web Design" },
    { icon: "🔍", title: "SEO Specialist" },
    { icon: "🔐", title: "Security Expert" },
    { icon: "⚙️", title: "Web Development" },
    { icon: "🎨", title: "UI/UX Design" },
    { icon: "📷", title: "Photography" },
    { icon: "📱", title: "App Development" },
    { icon: "🖌️", title: "Graphic Designer" },
  ];

  return (
    <section className="services-section" ref={sectionRef}>

      {/* Glow Background */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <h2 className="services-title">✨ My Services</h2>
      <p className="services-sub">What I can build for you</p>

      <div className="services-container">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;