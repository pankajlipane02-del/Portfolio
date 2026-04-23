import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

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
          padding-top: 70px;
        }

        /* ===== NAVBAR BASE ===== */
        .navbar {
          background: #f5f5f5;
          transition: 0.3s;
        }

        body.dark .navbar {
          background: #1e1e1e;
        }

        /* ===== TEXT COLOR FIX ===== */
        .nav-link {
          color: black !important;
          position: relative;
          padding-bottom: 5px;
        }

        body.dark .nav-link {
          color: white !important;
        }

        /* ===== LOGO COLOR ===== */
        .navbar-brand {
          color: black !important;
        }

        body.dark .navbar-brand {
          color: white !important;
        }

        /* ===== HOVER EFFECT ===== */
        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: teal;
          transform: translateX(-50%) scaleX(0);
          transition: 0.3s;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* ===== CENTER NAV ===== */
        .navbar-nav {
          width: 100%;
          justify-content: center;
          gap: 25px;
        }

        /* ===== FIX TOGGLER ICON ===== */
        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          filter: invert(0); /* black icon */
        }

        body.dark .navbar-toggler-icon {
          filter: invert(1); /* white icon */
        }

      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

          {/* LOGO */}
          <span className="navbar-brand fw-bold">
            Pan<span style={{ color: "teal" }}>kaj</span>
          </span>

          {/* TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/skill">Skills</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/work">Work</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>

            {/* RIGHT SIDE */}
            <div className="d-flex gap-2">

              <button
  onClick={toggleTheme}
  style={{
    width: "56px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "teal",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    marginTop:"5px",
  }}
>
  {dark ? "☀️" : "🌙"}
</button>

              <button className="btn btn-success">
                LETS TALK
              </button>

            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;