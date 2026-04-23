import React, { useState, useEffect } from "react";
import "./Work.css";

function Work() {
  const [dark, setDark] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [login, setLogin] = useState({ user: "", pass: "" });

  // 🔐 Login
  const handleLogin = () => {
    if (login.user === "pankaj2646" && login.pass === "shivaji01") {
      setIsAdmin(true);
    } else {
      alert("Wrong credentials ❌");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setLogin({ user: "", pass: "" });
  };

  // 📦 Load projects safely
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("mywork");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 💾 Save safely (with quota protection)
  useEffect(() => {
    try {
      localStorage.setItem("mywork", JSON.stringify(projects));
    } catch (error) {
      console.error("Storage full ❌", error);
      alert("Storage full! Delete some projects 🚨");
    }
  }, [projects]);

  // 📝 Form state
  const [form, setForm] = useState({
    title: "",
    desc: "",
    link: "",
    img: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  // ✏ Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🖼 Image handler (NO base64 ❌ → uses URL ✅)
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file); // lightweight
      setForm({ ...form, img: imageURL });
    }
  };

  // 💾 Save project
  const saveProject = () => {
    if (!form.title || !form.desc || !form.img) {
      alert("Fill all fields ❌");
      return;
    }

    if (editIndex !== null) {
      const updated = [...projects];
      updated[editIndex] = form;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects([...projects, form]);
    }

    setForm({ title: "", desc: "", link: "", img: "" });
  };

  // ❌ Delete
  const deleteProject = (i) => {
    setProjects(projects.filter((_, index) => index !== i));
  };

  // ✏ Edit
  const editProject = (i) => {
    setForm(projects[i]);
    setEditIndex(i);
  };

  return (
    <section className={dark ? "projects dark" : "projects"}>
      <h2 className="section-title">🚀 My Work</h2>

      {/* Top Bar */}
      <div className="top-bar">
        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>

        {isAdmin && (
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        )}
      </div>

      {/* Login */}
      {!isAdmin ? (
        <div className="login-box glass">
          <input
            placeholder="Username"
            onChange={(e) =>
              setLogin({ ...login, user: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogin({ ...login, pass: e.target.value })
            }
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="add-project glass ">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <input
            name="desc"
            placeholder="Description"
            value={form.desc}
            onChange={handleChange}
          />
          <input
            name="link"
            placeholder="Live Link"
            value={form.link}
            onChange={handleChange}
          />
          <input type="file" onChange={handleImage} />

          <button onClick={saveProject}>
            {editIndex !== null ? "Update Project" : "Add Project"}
          </button><br /><br /><br />
        </div>
      )}

      {/* Projects */}
      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="img-box">
              <img src={p.img} alt="" />
            </div>

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">
                <button className="live-btn">🌐 Live</button>
              </a>
            )}

            {isAdmin && (
              <div className="actions">
                <button onClick={() => editProject(i)}>✏ Edit</button>
                <button onClick={() => deleteProject(i)}>🗑 Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;