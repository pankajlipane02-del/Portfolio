import React, { useState, useEffect } from "react";
import "./Work.css";

import { db } from "./firebase";

import {
  ref,
  push,
  set,
  onValue,
  remove,
  update
} from "firebase/database";

function Work() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  // NEW
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // EDIT
  const [editId, setEditId] = useState(null);

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
          ...data[key],
        }));

        setProjects(loaded.reverse());
      } else {
        setProjects([]);
      }
    });
  };

  // LOGIN
  const adminLogin = () => {
    if (
      username === "pankaj2646" &&
      password === "shivaji01"
    ) {
      setIsAdmin(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Wrong Username or Password");
    }
  };

  // IMAGE
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // ADD / UPDATE
  const addProject = async () => {
    if (loading) return;

    if (
      !title ||
      !desc ||
      !img
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    if (editId) {
      await update(
        ref(db, `projects/${editId}`),
        {
          title,
          desc,
          img,
          liveLink,
          githubLink,
        }
      );
          } else {
      // ADD NEW PROJECT
      const projectRef = ref(db, "projects");
      const newProject = push(projectRef);

      await set(newProject, {
        title,
        desc,
        img,
        liveLink,
        githubLink,
      });
    }

    // RESET FORM
    setTitle("");
    setDesc("");
    setImg("");
    setLiveLink("");
    setGithubLink("");

    setEditId(null);
    setLoading(false);
    setIsOpen(false);
  };

  // DELETE
  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    await remove(ref(db, `projects/${id}`));
  };

  // EDIT
  const handleEdit = (project) => {
    setTitle(project.title);
    setDesc(project.desc);
    setImg(project.img);

    setLiveLink(project.liveLink || "");
    setGithubLink(project.githubLink || "");

    setEditId(project.id);
    setIsOpen(true);
  };

  return (
    <section className="projects">

      <h2 className="section-title">
        My Projects
      </h2>

      {!isAdmin && (
        <div className="admin-login">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={adminLogin}>
            Login
          </button>

        </div>
      )}

      {isAdmin && (
        <button
          className="open-btn"
          onClick={() => setIsOpen(true)}
        >
          + Add Project
        </button>
      )}

      {/* SIDEBAR */}

      <div
        className={`sidebar ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-content">

          <h2>
            {editId
              ? "Edit Project"
              : "Add Project"}
          </h2>

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) =>
              setDesc(e.target.value)
            }
          />

          <input
            type="url"
            placeholder="Live Demo URL"
            value={liveLink}
            onChange={(e) =>
              setLiveLink(e.target.value)
            }
          />

          <input
            type="url"
            placeholder="GitHub URL"
            value={githubLink}
            onChange={(e) =>
              setGithubLink(e.target.value)
            }
          />
                    <label className="file-label">
            Choose Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>

          {img && (
            <div className="image-preview">
              <img src={img} alt="Preview" />
            </div>
          )}

          <button onClick={addProject}>
            {loading
              ? "Saving..."
              : editId
              ? "Update Project"
              : "Add Project"}
          </button>

          <button
            className="close-btn"
            onClick={() => {
              setIsOpen(false);
              setEditId(null);
              setTitle("");
              setDesc("");
              setImg("");
              setLiveLink("");
              setGithubLink("");
            }}
          >
            Close
          </button>

        </div>
      </div>

      {/* PROJECTS */}

      <div className="project-container">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
          >
            <img
              src={project.img}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            {/* LIVE + GITHUB */}

            <div className="project-links">

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  🚀 Live Demo
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  💻 GitHub
                </a>
              )}

            </div>

            {/* ADMIN */}

            {isAdmin && (
              <div className="action-btns">

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(project)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteProject(project.id)
                  }
                >
                  Delete
                </button>

              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;