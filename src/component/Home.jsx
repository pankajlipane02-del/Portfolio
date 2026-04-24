import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import img34 from '../assets/image.png'
import img35 from '../assets/img1.png'
import "./Home.css"
function Home() {

  const [formData, setFormData] = useState({

    email: "",

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

      .then(() => {
        alert("Message sent successfully! ✅");
        setFormData({ email: "" });
      })
      .catch(() => {
        alert("Failed ❌");
      });
  };


  const navigate = useNavigate();
  return (
    <div>

      {/* ── Hero ── */}
      <div className='container-fluid bag'>
        <div className="container">
          <div className="row">
            <div className="col-md-5 pt-5">
              <h1 className='info mt-5'>
                Hey! I'm Pankaj <br /> Frontend Developer
              </h1><br /><br />

              <p>
                I am a Frontend Developer currently working as an intern at Baap Company.
                I specialize in building responsive and interactive web applications using
                HTML, CSS, JavaScript, React, and Python. I am also pursuing BCS.
              </p>

              <div>

                <button
                  type="button"
                  className="btn1"
                  onClick={() => navigate("/contact")}
                >
                  Hire Me
                </button>

                <button
                  type="button"
                  className="btn ms-3"
                  onClick={() => navigate("/work")}
                >
                  My Work
                </button>

              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img src={img34} alt="hero" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">

            {/* IMAGE */}
            <div className="col-md-5 pt-5  ps-5">
              <img className='about-img  mt-5' src={img35} alt="about" height={500} width={500} />
            </div>

            <div className="col-md-1"></div>

            {/* CONTENT */}
            <div className="col-md-5 pt-5 ps-4">

              <div className="me">About Me</div>
              <div className="me2">I'm Pankaj Lipne – Frontend Developer</div>

              <p>
                Mi sadhya <b>Baap Company</b> madhe intern mhanun kaam karto ani
                frontend development var focus karto. Mi clean, responsive ani
                interactive web applications banvayla avadto.
              </p>

              <div className="me">Education</div>
              <p>
                Mi sadhya <b>Bachelor of Computer Science (BCS)</b> karat ahe.
                College madhun mi programming ani web development madhe strong base
                build kela ahe.
              </p>

              <div className="me">Skills</div>
              <p>
                Mala <b>HTML, CSS, JavaScript, React.js ani Python</b> changlya prakare
                yetat. Mi modern UI design, API integration ani responsive layouts
                banvnyat comfortable ahe.
              </p>

              <div className="me">My Work</div>
              <p>
                Mi frontend var kaam karat asun real-world projects madhe experience
                milavtoy. Mi problem solving madhe interest thevto ani complex goshti
                simple UI madhe convert karayla avadto.
              </p>

            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />

      {/* ── Stats ── */}
      <div className='container-fluid'>
        <div className='container'>
          <div className="row">

            <div className="col-md-3">
              <div className='boxs text-center pt-3'>
                <p className='tbox'>Intern</p>
                <p className='pbox'>Current Role</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className='boxs text-center pt-3'>
                <p className='tbox'>25+</p>
                <p className='pbox'>Projects Completed</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className='boxs text-center pt-3'>
                <p className='tbox'>6+</p>
                <p className='pbox'>Technologies Learned</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className='boxs text-center pt-3'>
                <p className='tbox'>BCS</p>
                <p className='pbox'>Pursuing Degree</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <br /><br /><br /><br />

      {/* ── Hobbies ── */}
      <div className="container-fluid">
        <div className="container text-center">
          <div className="me">Hobbies</div>
          <div className="me2">Things I Love to Do</div>
          <br /><br /><br />
          <div className="row g-3 d-flex justify-content-around">
            <div className="col-md-2 col-6 box2">Football</div>
            <div className="col-md-2 col-6 box2">Cybersecurity</div>
            <div className="col-md-2 col-6 box2">Cooking</div>
            <div className="col-md-2 col-6 box2">Music</div>
            <div className="col-md-2 col-6 box2">Digital Marketing</div>
            <div className="col-md-2 col-6 box2">Graphic Design</div>
          </div><br />
          <div className="row g-3">
            <div className="col-md-2 col-6 box2">Photography</div>
            <div className="col-md-2 col-6 box2">DevOps</div>
            <div className="col-md-2 col-6 box2">WP Optimization</div>
            <div className="col-md-2 col-6 box2">Blogging</div>
            <div className="col-md-2 col-6 box2">Coding</div>
            <div className="col-md-2 col-6 box2">Gaming</div>
          </div><br />
          <div className="row g-3">
            <div className="col-md-2 col-6 box2">UX Research</div>
            <div className="col-md-2 col-6 box2">Project Manage</div>
            <div className="col-md-2 col-6 box2">Writing</div>
            <div className="col-md-2 col-6 box2">Reading</div>
            <div className="col-md-2 col-6 box2">Swimming</div>
            <div className="col-md-2 col-6 box2">Dancing</div>
          </div>
        </div>
      </div>

      <br /><br /><br />

      {/* ── Services ── */}
      <div className="container-fluid bg-light pb-5">
        <div className="container text-center pt-3">
          <div className="me">Services</div>
          <div className="me2">Things I Love to Do</div><br />
          <p>It is a long established fact that a reader will be distracted by the next readable content of a page when <br /> looking at its layout. The point of all a using the best of all the places.</p>
          <br /><br /><br />
          <div className="row g-5 d-flex justify-content-around">
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3 ">
                <div className="icon-inner">
                  <svg className="custom-svg " xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 640 640">
                    <path fill="rgb(233, 237, 242)" d="M288.3 61.5C308.1 50.1 332.5 50.1 352.3 61.5L528.2 163C548 174.4 560.2 195.6 560.2 218.4L560.2 421.4C560.2 444.3 548 465.4 528.2 476.8L352.3 578.5C332.5 589.9 308.1 589.9 288.3 578.5L112.5 477C92.7 465.6 80.5 444.4 80.5 421.6L80.5 218.6C80.5 195.7 92.7 174.6 112.5 163.2L288.3 61.5z" />
                  </svg>
                </div>
              </div>
              <p>Web Design</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z" /></svg>
                </div>
              </div>
              <p>SEO specialist</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" /></svg>
                </div>
              </div>
              <p>Security Expert</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" /></svg>
                </div>
              </div>
              <p>Web Development</p>
            </div>
          </div><br />
          <div className="row g-5 d-flex justify-content-around">
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM370.7 389.1L226.4 444.6C207 452.1 187.9 433 195.4 413.6L250.9 269.3C254.2 260.8 260.8 254.2 269.3 250.9L413.6 195.4C433 187.9 452.1 207 444.6 226.4L389.1 370.7C385.8 379.2 379.2 385.8 370.7 389.1zM352 320C352 302.3 337.7 288 320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320z" /></svg>
                </div>
              </div>
              <p>UI/UX Design</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M257.1 96C238.4 96 220.9 105.4 210.5 120.9L184.5 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L455.5 160L429.5 120.9C419.1 105.4 401.6 96 382.9 96L257.1 96zM250.4 147.6C251.9 145.4 254.4 144 257.1 144L382.8 144C385.5 144 388 145.3 389.5 147.6L422.7 197.4C427.2 204.1 434.6 208.1 442.7 208.1L512 208.1C520.8 208.1 528 215.3 528 224.1L528 480.1C528 488.9 520.8 496.1 512 496.1L128 496C119.2 496 112 488.8 112 480L112 224C112 215.2 119.2 208 128 208L197.3 208C205.3 208 212.8 204 217.3 197.3L250.5 147.5zM320 448C381.9 448 432 397.9 432 336C432 274.1 381.9 224 320 224C258.1 224 208 274.1 208 336C208 397.9 258.1 448 320 448zM256 336C256 300.7 284.7 272 320 272C355.3 272 384 300.7 384 336C384 371.3 355.3 400 320 400C284.7 400 256 371.3 256 336z" /></svg>
                </div>
              </div>
              <p>Photography</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z" /></svg>
                </div>
              </div>
              <p>IOS App Development</p>
            </div>
            <div className="col-md-3 box pt-3">
              <div className="icon-wrapper mx-auto mb-3">
                <div className="icon-inner">
                  <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(247, 243, 243)" d="M432.5 82.3L382.4 132.4L507.7 257.7L557.8 207.6C579.7 185.7 579.7 150.3 557.8 128.4L511.7 82.3C489.8 60.4 454.4 60.4 432.5 82.3zM343.3 161.2L342.8 161.3L198.7 204.5C178.8 210.5 163 225.7 156.4 245.5L67.8 509.8C64.9 518.5 65.9 528 70.3 535.8L225.7 380.4C224.6 376.4 224.1 372.3 224.1 368C224.1 341.5 245.6 320 272.1 320C298.6 320 320.1 341.5 320.1 368C320.1 394.5 298.6 416 272.1 416C267.8 416 263.6 415.4 259.7 414.4L104.3 569.7C112.1 574.1 121.5 575.1 130.3 572.2L394.6 483.6C414.3 477 429.6 461.2 435.6 441.3L478.8 297.2L478.9 296.7L343.4 161.2z" /></svg>
                </div>
              </div>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />

      {/* ── Pricing ── */}
      {/* <div className="container-fluid">
        <div className="container text-center">
          <h2 className="section-title">We Offer Great Affordable Prices</h2>
          <p className="section-sub">
            Professionally evolve web-enabled resources and error-free user a Interactively provide access to unique
            architectures rather than an customized functionalities. Enthusiastically maintain
          </p>

          <div className="cards-grid">

            <div className="card">
              <div className="card-title">Starter</div>
              <div className="price-banner">
                <span className="price-amount">10$</span>
                <span className="price-period">/Month</span>
              </div>
              <ul className="features">
                <li>Creative Web Enabled</li>
                <li>Vibrant Color Usage</li>
                <li>Eye Catching Design</li>
                <li className="off">Extreme Typography</li>
                <li className="off">Exceptional Design</li>
              </ul>
              <div className="btn-wrap">
                <button className="btn-purchase">PURCHASE NOW</button>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Regular</div>
              <div className="price-banner">
                <span className="price-amount">49$</span>
                <span className="price-period">/Month</span>
              </div>
              <ul className="features">
                <li>Creative Web Enabled</li>
                <li className="off">Vibrant Color Usage</li>
                <li>Eye Catching Design</li>
                <li className="off">Extreme Typography</li>
                <li>Exceptional Design</li>
              </ul>
              <div className="btn-wrap">
                <button className="btn-purchase">PURCHASE NOW</button>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Advance</div>
              <div className="price-banner">
                <span className="price-amount">99$</span>
                <span className="price-period">/Month</span>
              </div>
              <ul className="features">
                <li>Creative Web Enabled</li>
                <li>Vibrant Color Usage</li>
                <li>Eye Catching Design</li>
                <li>Extreme Typography</li>
                <li>Exceptional Design</li>
              </ul>
              <div className="btn-wrap">
                <button className="btn-purchase">PURCHASE NOW</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <br /><br /><br /> */}
      {/* -------------------------------------------------------------------------------------------------- */}
      <footer className="footer">
        <div className="footer-container">

          {/* ── Brand ── */}
          <div className="footer-brand animate-footer fade-left">
            <div className="footer-logo">
              <span className="logo-n">P</span>
              <span className="logo-gap">ank</span>
              <span className="logo-ro">aj</span>
              <div className="logo-line"></div>
            </div>
            <p className="footer-desc">
              I've been working as web developer for the past two years, and have experience in multiple frameworks.
            </p>
          </div>

          {/* ── Contact ── */}
          <div className="footer-contact animate-footer fade-up">
            <h3 className="footer-heading">Contact Details</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </span>
                +91 9284-461-614
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                pankajlipane02@gmail.com
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                selu 431503,maharashtra,india
              </li>
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div className="footer-newsletter animate-footer fade-right">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="contact-left">

              <h2>📩 Newsletter</h2>
              <p>Subscribe for updates 🚀</p>

              <form onSubmit={handleSubmit} className="newsletter-form">

                <input
                  type="email"
                  name="email"
                  placeholder="📧 Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="newsletter-input"
                />

                <button type="submit" className="newsletter-btn ">
                  🚀
                </button>


              </form>

            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/Pankaj-Lipane/pfbid027hn1bJVCxWTvLTk4Tv21moHc6RZ4mwDs25g3u8D7xXbSgdDPEsixFGjoFwSL6Laol/" className="social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://x.com/?lang=en-in" className="social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/pankaj-l-17060a332/" className="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/mr_pankya__2646/" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p>© 2026 <strong>Pankaj Lipane</strong>. All Rights Reserved.</p>

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15" />
          </svg>

        </div>
      </footer>
    </div>
  )
}

export default Home