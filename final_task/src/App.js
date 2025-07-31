import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/TDA.png" alt="TDA Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li className="dropdown">
              Events
              <ul className="dropdown-content">
                <li>Workshops</li>
                <li>Hackathons</li>
                <li>Sessions</li>
              </ul>
            </li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>



      <section className="hero">
        <h1>The Data Analysts</h1>
        <p>MIT Manipal's Technical Club for Data, Finance & AI Enthusiasts</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          The Data Analysts (TDA) is a student-run technical club at Manipal Institute of Technology. 
          We aim to foster knowledge and collaboration in fields like Data Analytics, FinTech, AI, and more.
          The Data Alchemists is an all-things-data club. We cover the entire spectrum of data science from Data Engineering to Analytics and Visualization to Machine Learning and Deep Learning. With the exponentially growing amount available data, the doors for many new areas in the field of Data Science have opened. Artificial Intelligence and Large Language Models are becoming an inseparable part of our lives.
          The aim of the club is to keep up with the pace and growth of the field of data science and provide to the students an opportunity to be a part of this domain. The club serves as a platform to learn new skills, leverage and improve existing skillset via projects and provide a means for collaboration between students with similar interests.
        </p>
        <p>
          Learn more about us on the official MIT Manipal page:{" "}
          <a 
            href="https://www.manipal.edu/mit/mit-experience/student-welfare/technical-clubs/TDA-Manipal.html" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            TDA - MIT Manipal
          </a>
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: tda@manipal.edu</p>
            <p>Location: MIT Campus, Manipal</p>
          </div>

          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h4>Follow Us</h4>
            <p>Instagram: <a href="https://instagram.com/tda.manipal" target="_blank">@tda.manipal</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/company/thedataanalysts" target="_blank">The Data Analysts</a></p>
          </div>
        </div>
        <p className="footer-bottom">© 2025 The Data Analysts - MIT Manipal. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
