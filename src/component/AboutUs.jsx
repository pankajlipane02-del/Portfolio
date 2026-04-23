import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import img from "../assets/img1.png";

function AboutUs() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="aboutus-section" ref={sectionRef}>
      <div className="aboutus-container">

        {/* 🖼 Image */}
        <div className="aboutus-img">
          <img src={img} alt="about" />
        </div>

        {/* 📄 Content */}
        <div className="aboutus-content">
          <h4>👋 About Me</h4>
          <h2>
            Hi, I'm <span>Pankaj Lipne</span>
          </h2>

          <p>
            I'm a passionate Frontend Developer from Pune who loves building
            modern, responsive, and interactive web applications using React.js.
          </p>

          <div className="aboutus-cards">
            <div className="card">
              <h5>💡 Mission</h5>
              <p>Create clean & user-friendly UI</p>
            </div>

            <div className="card">
              <h5>🚀 Vision</h5>
              <p>Grow as a top frontend developer</p>
            </div>
          </div>

          <a href="20260423_155526.png" download>
  <button className="aboutus-btn">Download CV</button>
</a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;