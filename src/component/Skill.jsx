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
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skills = [
    {
      name: "HTML",
      percent: "90%",
      class: "html",
      color: "#ff6b35",
    },
    {
      name: "CSS",
      percent: "85%",
      class: "css",
      color: "#00c6ff",
    },
    {
      name: "JavaScript",
      percent: "80%",
      class: "js",
      color: "#ffd500",
    },
    {
      name: "React",
      percent: "82%",
      class: "react",
      color: "#61dafb",
    },
    {
      name: "Firebase",
      percent: "78%",
      class: "firebase",
      color: "#ff9100",
    },
    {
      name: "Git & GitHub",
      percent: "75%",
      class: "git",
      color: "#ff4d4d",
    },
  ];

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>

      <p className="skills-subtitle">
        Technologies I use to build modern web applications.
      </p>

      <div className="skills-container p-5">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--color": skill.color }}
          >
            <div className="skill-top">
              <h3>{skill.name}</h3>
              <span>{skill.percent}</span>
            </div>

            <div className="progress">
              <div className={`progress-bar ${skill.class}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;