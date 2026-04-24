import React, { useState, useEffect } from "react";
import "./Work.css";


import { db, storage } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

function Work() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [login, setLogin] = useState({ user: "", pass: "" });

  const [form, setForm] = useState({
    title: "",
    desc: "",
    link: "",
    img: null
  });

  const [editId, setEditId] = useState(null);

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
  };

  // 📦 Fetch projects
  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 📝 Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setForm({ ...form, img: e.target.files[0] });
  };

  // 💾 Save
  const saveProject = async () => {
    if (!form.title || !form.desc) {
      alert("Fill all fields");
      return;
    }

    let imageUrl = "";

    // upload image
    if (form.img) {
      const imageRef = ref(storage, "projects/" + form.img.name);
      await uploadBytes(imageRef, form.img);
      imageUrl = await getDownloadURL(imageRef);
    }

    if (editId) {
      await updateDoc(doc(db, "projects", editId), {
        title: form.title,
        desc: form.desc,
        link: form.link,
        img: imageUrl
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, "projects"), {
        title: form.title,
        desc: form.desc,
        link: form.link,
        img: imageUrl
      });
    }

    setForm({ title: "", desc: "", link: "", img: null });
    fetchProjects();
  };

  // ❌ Delete
  const deleteProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    fetchProjects();
  };

  // ✏ Edit
  const editProject = (p) => {
    setForm(p);
    setEditId(p.id);
  };

  return (
    <section className="projects">
      <h2>🚀 My Work</h2>

      {!isAdmin ? (
        <div className="login-box">
          <input placeholder="Username"
            onChange={(e)=>setLogin({...login,user:e.target.value})}/>
          <input type="password" placeholder="Password"
            onChange={(e)=>setLogin({...login,pass:e.target.value})}/>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="add-project">
          <input name="title" placeholder="Title"
            value={form.title} onChange={handleChange}/>
          <input name="desc" placeholder="Description"
            value={form.desc} onChange={handleChange}/>
          <input name="link" placeholder="Link"
            value={form.link} onChange={handleChange}/>
          <input type="file" onChange={handleImage}/>
          <button onClick={saveProject}>
            {editId ? "Update" : "Add"}
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <div className="project-container">
        {projects.map(p => (
          <div key={p.id} className="project-card">
            <img src={p.img} alt="" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            {p.link && (
              <a href={p.link} target="_blank">
                <button>Live</button>
              </a>
            )}

            {isAdmin && (
              <>
                <button onClick={()=>editProject(p)}>Edit</button>
                <button onClick={()=>deleteProject(p.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;