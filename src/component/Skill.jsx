import React, { useEffect, useRef } from "react";
import "./Skill.css";

function Skill() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>

      {/* 🔥 Glow Background */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <h2 className="skills-title">🚀 My Skills</h2>
      <p className="skills-sub">My technical expertise</p>

      <div className="skills-container">

        <div className="skill">
          <div className="skill-info">
            <p>HTML</p>
            <span>90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar html"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <p>CSS</p>
            <span>85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar css"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <p>JavaScript</p>
            <span>75%</span>
          </div>
          <div className="progress">
            <div className="progress-bar js"></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-info">
            <p>React</p>
            <span>80%</span>
          </div>
          <div className="progress">
            <div className="progress-bar react"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skill;