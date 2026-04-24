import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false); // 🔥 NEW

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

  // 🔥 link click → auto close
  const handleClose = () => setOpen(false);

  return (
    <>
      <style>{`

        body {
          padding-top: 70px;
        }

        .navbar {
          background: #f5f5f5;
          transition: 0.3s;
          padding:12px;
        }

        body.dark .navbar {
          background: #1e1e1e;
        }

        .nav-link {
          color: black !important;
          position: relative;
          padding-bottom: 5px;
        }

        body.dark .nav-link {
          color: white !important;
        }

        .navbar-brand {
          color: black !important;
        }

        body.dark .navbar-brand {
          color: white !important;
        }

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

        .navbar-nav {
          width: 100%;
          justify-content: center;
          gap: 25px;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          filter: invert(0);
        }

        body.dark .navbar-toggler-icon {
          filter: invert(1);
        }

        /* 🔥 smooth animation */
        .navbar-collapse {
          transition: all 0.3s ease;
        }

      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

          {/* LOGO */}
          <span className="navbar-brand fw-bold">
            Pan<span style={{ color: "teal" }}>kaj</span>
          </span>

          {/* 🔥 TOGGLER (Bootstrap data removed) */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="rgb(8, 8, 8)" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
              </svg>
            </span>
          </button>

          {/* 🔥 CONTROLLED COLLAPSE */}
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarNav">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleClose}>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleClose}>About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services" onClick={handleClose}>Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/skill" onClick={handleClose}>Skills</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/work" onClick={handleClose}>Work</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing" onClick={handleClose}>Pricing</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={handleClose}>Contact</NavLink>
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