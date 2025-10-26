import React, { useState, useRef } from "react";
import "./App.css";
import MovieRow from "./MovieRow";

function MainApp() {
  const samplePosters = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpg",
    "/img4.png",
    "/img5.jpg",
    "/img6.jpeg",
    "/img7.jpeg",
    "/img8.jpeg",
    "/img9.jpeg",
    "/img12.jpeg",
    "/img13.jpeg"
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

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  const handleStart = () => {
    setIsReady(true);
    videoRef.current.play();
  };

  return (
    <>
      {showIntro ? (
        <>
          {!isReady && (
            <div
              onClick={handleStart}
              style={{
                position: "fixed",
                inset: 0,
                background: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 9999,
              }}
            >
              Tap to start
            </div>
          )}
          <video
            ref={videoRef}
            src="/netflix-intro.mp4"
            onEnded={() => setShowIntro(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 9998,
              backgroundColor: "black",
              display: isReady ? "block" : "none",
            }}
            controls={false}
          />
        </>
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App;
