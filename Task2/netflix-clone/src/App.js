import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MovieRow from "./MovieRow";

/* ------------------- HERO SLIDESHOW ------------------- */
function HeroSlider() {
  const slides = [
    { image: "/feature1.jpg", audio: "/feature1.mp3" },
    { image: "/feature2.jpg", audio: "/feature2.mp3" },
    { image: "/feature3.jpg", audio: "/feature3.mp3" }
  ];

  const [current, setCurrent] = useState(0);
  const audioRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 15000); // 15 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length]);

  // play audio only on active slide
  useEffect(() => {
    audioRefs.current.forEach((audio, index) => {
      if (!audio) return;

      if (index === current) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });
  }, [current]);

  return (
    <div className="hero-slider">

      {/* Left Arrow */}
      <button
        className="arrow left"
        onClick={() =>
          setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        className="arrow right"
        onClick={() =>
          setCurrent(prev => (prev + 1) % slides.length)
        }
      >
        ❯
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className="hero-slide-wrapper"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img src={slide.image} className="hero-image" alt="banner" />

          <audio
            ref={el => (audioRefs.current[index] = el)}
            src={slide.audio}
          ></audio>
        </div>
      ))}
    </div>
  );
}


/* ------------------- MAIN NETFLIX PAGE ------------------- */
function MainApp() {
  const samplePosters = [
    "/img1.jpeg", "/img2.jpeg", "/img3.jpg",
    "/img4.png", "/img5.jpg", "/img6.jpeg",
    "/img7.jpeg", "/img8.jpeg", "/img9.jpeg",
    "/img12.jpeg", "/img13.jpeg"
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

      <HeroSlider />

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


/* ------------------- INTRO VIDEO ------------------- */
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
            src="/st-netflix-intro.mp4"
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
