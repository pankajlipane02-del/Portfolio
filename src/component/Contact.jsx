import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_oiwg91k",
      "template_0qov1sr",
      formData,
      "uTnqMeNTvziIDL1DU"
    )

    emailjs.send(
      "service_oiwg91k",
      "template_z2z4ou9",
      formData,
      "uTnqMeNTvziIDL1DU"
    )
    .then(() => {
      alert("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed ❌");
    });
  };

  return (
    <section className="contact-section">

      {/* Glow */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="contact-wrapper">

        {/* LEFT (FORM) */}
        <div className="contact-left">

          <h2>📩 Contact Me</h2>
          <p>Let’s build something amazing 🚀</p>

          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="👤 Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="📧 Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="💬 Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button>
              🚀 Send Message
            </button>

          </form>

        </div>

        {/* RIGHT (INFO) */}
        <div className="contact-right">

          <div className="info-card">
            <span>📧</span>
            <div>
              <p>Email</p>
              <h4>pankajlipane02@email.com</h4>
            </div>
          </div>

          <div className="info-card">
            <span>📱</span>
            <div>
              <p>Phone</p>
              <h4>+91 9284461614</h4>
            </div>
          </div>

          <div className="info-card">
            <span>📍</span>
            <div>
              <p>Location</p>
              <h4>Selu, Maharashtra, India</h4>
            </div>
          </div>

          <div className="info-card">
            <span>💼</span>
            <div>
              <p>LinkedIn</p>
              <h4><a href="https://www.linkedin.com/in/pankaj-l-17060a332/" className="text-decoration-none text-white"> linkdin-pankaj lipane</a></h4>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;