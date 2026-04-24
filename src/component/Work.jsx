import React, { useState, useEffect } from "react";
import "./Work.css";
 
import { db } from "./firebase";
 
import {
  ref,
  push,
  set,
  onValue,
  remove
} from "firebase/database";
 
function Work() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
const [password, setPassword] = useState("");
 
  useEffect(() => {
    fetchProjects();
  }, []);
 
  const fetchProjects = () => {
    const projectRef = ref(db, "projects");
 
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
 
      if (data) {
        const loaded = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
 
        setProjects(loaded);
      } else {
        setProjects([]);
      }
    });
  };
 
  const adminLogin = () => {
  if (password === "1234") {
    setIsAdmin(true);
    setPassword("");
  } else {
    alert("Wrong Password");
  }
};
 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
 
    if (!file) return;
 
    const reader = new FileReader();
 
    reader.onloadend = () => {
      setImg(reader.result);
    };
 
    reader.readAsDataURL(file);
  };
 
  const addProject = async () => {
    if (loading) return;
 
    if (!title || !desc || !img) {
      alert("Fill all fields");
      return;
    }
 
    setLoading(true);
 
    const projectRef = ref(db, "projects");
    const newProject = push(projectRef);
 
    await set(newProject, {
      title,
      desc,
      img
    });
 
    setTitle("");
    setDesc("");
    setImg("");
    setIsOpen(false);
    setLoading(false);
  };
 
  const deleteProject = async (id) => {
    await remove(ref(db, `projects/${id}`));
  };
 
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
 
      {!isAdmin && (
  <div className="admin-login">
    <input
      type="password"
      placeholder="Admin Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={adminLogin}>Login</button>
  </div>
)}
 
      {isAdmin && (
  <button className="open-btn" onClick={() => setIsOpen(true)}>
    + Add Project
  </button>
)}
 
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <h2>Add Project</h2>
 
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
 
          <label className="file-label">
            Choose Image
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
 
          {img && (
            <div className="image-preview">
              <img src={img} alt="preview" />
            </div>
          )}
 
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
 
          <button onClick={addProject}>
            {loading ? "Adding..." : "Add Project"}
          </button>
 
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
 
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} />
 
            <h3>{project.title}</h3>
 
            <p>{project.desc}</p>
 
           {isAdmin && (
  <button
    className="delete-btn"
    onClick={() => deleteProject(project.id)}
  >
    Delete
  </button>
)}
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Work;
 