import React, { useEffect, useRef } from "react";
import "./Pricing.css";

function Pricing() {
  const sectionRef = useRef(null);

  // 🔥 Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="pricing-section dark" ref={sectionRef}>
      {/* Background Decor */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <div className="pricing-content">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-sub">Choose the perfect plan for your needs</p>

        <div className="pricing-container">
          {/* Starter Plan */}
          <div className="price-card glass-card">
            <div className="plan-header">
              <h3>Starter</h3>
              <div className="price">
                <h1>$10</h1>
                <span>/month</span>
              </div>
            </div>
            <ul>
              <li><span className="check">✔</span> Basic Website</li>
              <li><span className="check">✔</span> Responsive Design</li>
              <li><span className="check">✔</span> Email Support</li>
              <li className="off"><span className="cross">✘</span> Advanced Features</li>
            </ul>
            <button className="main-btn">Choose Plan</button>
          </div>

          {/* Regular Plan (Popular) */}
          <div className="price-card glass-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="plan-header">
              <h3>Regular</h3>
              <div className="price">
                <h1>$49</h1>
                <span>/month</span>
              </div>
            </div>
            <ul>
              <li><span className="check">✔</span> All Starter Features</li>
              <li><span className="check">✔</span> Custom UI Design</li>
              <li><span className="check">✔</span> Priority Support</li>
              <li className="off"><span className="cross">✘</span> Full Source Code</li>
            </ul>
            <button className="main-btn highlight-btn">Choose Plan</button>
          </div>

          {/* Advance Plan */}
          <div className="price-card glass-card">
            <div className="plan-header">
              <h3>Advance</h3>
              <div className="price">
                <h1>$99</h1>
                <span>/month</span>
              </div>
            </div>
            <ul>
              <li><span className="check">✔</span> All Features</li>
              <li><span className="check">✔</span> Premium UI/UX</li>
              <li><span className="check">✔</span> 24/7 Live Support</li>
              <li><span className="check">✔</span> Marketing Tools</li>
            </ul>
            <button className="main-btn">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;