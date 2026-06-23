import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDark(true);
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <style>{`
        body{
          padding-top:70px;
          transition:0.3s;
        }

        body.dark{
          background:#121212;
          color:white;
        }

        .navbar{
          background:#f5f5f5;
          padding:12px;
          transition:0.3s;
          box-shadow:0 2px 10px rgba(0,0,0,0.1);
        }

        body.dark .navbar{
          background:#1e1e1e;
        }

        .navbar-brand{
          font-size:1.6rem;
          font-weight:700;
          color:black !important;
        }

        body.dark .navbar-brand{
          color:white !important;
        }

        .navbar-nav{
          gap:20px;
        }

        .nav-link{
          color:black !important;
          position:relative;
          font-weight:500;
        }

        body.dark .nav-link{
          color:white !important;
        }

        .nav-link::after{
          content:"";
          position:absolute;
          left:50%;
          bottom:-2px;
          width:100%;
          height:2px;
          background:teal;
          transform:translateX(-50%) scaleX(0);
          transition:0.3s;
        }

        // .nav-link:hover::after,
        // .nav-link.active::after{
        //   transform:translateX(-50%) scaleX(1);
        // }

        .navbar-toggler{
          border:none;
          background:none;
        }

        .theme-btn{
          width:42px;
          height:42px;
          border:none;
          border-radius:50%;
          background:teal;
          color:white;
          cursor:pointer;
          font-size:16px;
        }

        @media(max-width:991px){

          .navbar-collapse{
            margin-top:15px;
            padding:15px;
            border-radius:12px;
          }

          .navbar-nav{
            text-align:center;
            gap:10px;
          }

          .right-section{
            justify-content:center;
            margin-top:10px;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-brand text-decoration-none"
            onClick={handleClose}
          >
            Pan<span style={{ color: "teal" }}>kaj</span>
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
          >
            <span
              style={{
                fontSize: "26px",
                color: dark ? "#fff" : "#000",
              }}
            >
              {open ? "✕" : "☰"}
            </span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={handleClose}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/skill"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Skills
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/work"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Work
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={handleClose}
                >
                  Contact
                </NavLink>
              </li>

            </ul>

            {/* Right Side */}
            <div className="d-flex gap-2 right-section">
              <button
                className="theme-btn"
                onClick={toggleTheme}
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;