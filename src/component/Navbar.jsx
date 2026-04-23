import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const [dark, setDark] = useState(false);

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <>
      <style>{`

        body {
          margin: 0;
          font-family: Arial;
        }

        /* 🔥 IMPORTANT: prevent content hiding under fixed navbar */
        body {
          padding-top: 70px;
        }

        /* ================= NAVBAR ================= */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;

          background: #f5f5f5;

          position: fixed;   /* 🚀 FIXED */
          top: 0;
          left: 0;
          width: 100%;

          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo {
          font-size: 20px;
          font-weight: bold;
        }

        .logo span {
          color: teal;
        }

        /* ================= LINKS ================= */
        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: black;
          font-weight: 500;
          position: relative;
          padding-bottom: 5px;
          transition: color 0.3s ease;
        }

        /* 🔥 PERFECT UNDERLINE */
        .nav-links a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;

          width: 100%;
          height: 2px;
          background: teal;

          transform: translateX(-50%) scaleX(0);
          transform-origin: center;

          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover {
          color: teal;
        }

        .nav-links a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-links a.active {
          color: teal;
        }

        .nav-links a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* ================= BUTTON ================= */
        .btn {
          padding: 8px 20px;
          background: teal;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn:hover {
          background: #008080;
          box-shadow: 0 6px 15px rgba(0, 128, 128, 0.4);
          transform: translateY(-2px);
        }

        .btn:active {
          transform: translateY(0);
          box-shadow: 0 3px 8px rgba(0, 128, 128, 0.3);
        }

        /* 🌙 Dark Mode */
        body.dark {
          background: #121212;
          color: white;
        }

        body.dark .navbar {
          background: #1e1e1e;
        }

        body.dark .nav-links a {
          color: white;
        }

        body.dark .nav-links a.active {
          color: #00d4ff;
        }

        body.dark .nav-links a::after {
          background: #00d4ff;
        }

        /* Toggle Button */
        .theme-btn {
          margin-right: 10px;
          padding: 6px 12px;
          border: none;
          border-radius: 50%;
          background: teal;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

      `}</style>

      {/* Navbar */}
      <div className="navbar">

        <div className="logo">Pan<span>kaj</span></div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/skill">Skills</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="theme-btn" onClick={toggleTheme}>
            {dark ? "☀️" : "🌙"}
          </button>

          <button className="btn">LETS TALK</button>
        </div>

      </div>
    </>
  )
}

export default Navbar;