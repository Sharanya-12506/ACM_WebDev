import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";

function App() {
  const samplePosters = [
    "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
    "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    "https://image.tmdb.org/t/p/w500/5N20rQURev5CNDcMjHVUZhpoCNC.jpg",
    "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
  ];

  return (
    <div className="App">
      <header className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <h2>Watch Unlimited Movies & TV Shows</h2>
        <p>Ready to binge?</p>
        <button>Get Started</button>
      </main>

      <MovieRow title="Trending Now" movies={samplePosters} />
      <MovieRow title="Top Picks For You" movies={samplePosters} />

      <footer className="footer">
        <p>Questions? Call 000-800-919-1694</p>
        <ul className="footer-links">
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
        </ul>
        <p className="footer-credit">Netflix Clone by Sharanya</p>
      </footer>

    </div>
  );
}

export default App;
