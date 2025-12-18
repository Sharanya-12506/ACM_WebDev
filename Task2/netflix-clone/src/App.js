import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import MovieRow from "./MovieRow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* ---------------- HERO SLIDER (SWIPER + CUSTOM ARROWS) ---------------- */
function HeroSlider() {
  const slides = [
    {
      image: "/feature1.jpg",
      audio: "/feature1.mp3",
      title: "STRANGER THINGS",
      subtitle: "The new chapter unleashes darker forces and deeper mysteries."
    },
    {
      image: "/feature2.jpg",
      audio: "/feature2.mp3",
      title: "BLACK MIRROR",
      subtitle: "Twisted visions of the future blur the line between tech and terror."
    },
    {
      image: "/feature3.jpg",
      audio: "/feature3.mp3",
      title: "TO ALL THE BOYS I'VE LOVED BEFORE",
      subtitle: "A heartfelt love story where romance gets beautifully complicated."
    }
  ];

  const swiperRef = useRef(null);

  /* AUDIO STATE */
  const audioRef = useRef(new Audio(slides[0].audio));
  const [isMuted, setIsMuted] = useState(false);

  /* Play first audio on load */
  useEffect(() => {
    audioRef.current.volume = 1;
    audioRef.current.play().catch(() => {});
  }, []);

  /* Mute/unmute effect */
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : 1;
  }, [isMuted]);

  /* Fade audio */
  const fadeAudio = (audio, from, to, duration = 500) => {
    const steps = 15;
    const step = (to - from) / steps;
    let vol = from;

    const interval = setInterval(() => {
      vol += step;
      audio.volume = Math.max(0, Math.min(1, vol));
      if ((step > 0 && vol >= to) || (step < 0 && vol <= to)) clearInterval(interval);
    }, duration / steps);
  };

  /* Slide change handler */
  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;

    const oldAudio = audioRef.current;
    fadeAudio(oldAudio, oldAudio.volume, 0, 500);

    setTimeout(() => {
      oldAudio.pause();
      const newAudio = new Audio(slides[index].audio);
      audioRef.current = newAudio;
      newAudio.volume = isMuted ? 0 : 1;
      newAudio.play().catch(() => {});
    }, 500);
  };

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}     // 🚫 disable Swiper arrows
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <img src={slide.image} alt="" className="hero-image" />

              <div className="hero-gradient"></div>

              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>

                <div className="hero-buttons">
                  <button className="play-btn">▶ Play</button>
                  <button className="info-btn">ⓘ More Info</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Netflix-style arrows */}
      <div
        className="custom-prev arrow"
        onClick={() => swiperRef.current.slidePrev()}
      >
        ❮
      </div>

      <div
        className="custom-next arrow"
        onClick={() => swiperRef.current.slideNext()}
      >
        ❯
      </div>

      {/* MUTE BUTTON */}
      <button className="mute-btn" onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />

        <ul className="nav-menu">
          <li className="active">Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="nav-right">
        <svg className="nav-icon" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm8 14-4-4"
          />
        </svg>

        <svg className="nav-icon" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M12 24c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6.3-6V11c0-3.1-2-5.6-5-6.3V4a1.3 1.3 0 0 0-2.6 0v.7C7.7 5.4 5.7 7.9 5.7 11v7L4 20v1h16v-1l-1.7-2z"
          />
        </svg>

        <img
          className="profile-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile"
        />

        <svg className="dropdown-icon" viewBox="0 0 24 24">
          <path fill="white" d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </header>
  );
}

/* ---------------- PAGE CONTENT ---------------- */
function MainApp() {
  const posters = [
    "/img1.jpeg", "/img2.jpeg", "/img3.jpg",
    "/img4.png", "/img5.jpg", "/img6.jpeg",
    "/img7.jpeg", "/img8.jpeg", "/img9.jpeg",
    "/img12.jpeg", "/img13.jpeg"
  ];

  return (
    <div className="App">
      <Navbar />
      <HeroSlider />

      <MovieRow title="Trending Now" movies={posters} />
      <MovieRow title="Top Picks For You" movies={posters} />

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

/* ---------------- APP ROOT (WITH INTRO VIDEO) ---------------- */
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  const startIntro = () => {
    setIsReady(true);
    videoRef.current.play();
  };

  return (
    <>
      {showIntro ? (
        <>
          {!isReady && (
            <div
              className="tap-screen"
              onClick={startIntro}
            >
              Tap to start
            </div>
          )}

          <video
            ref={videoRef}
            src="/st-netflix-intro.mp4"
            onEnded={() => setShowIntro(false)}
            className="intro-video"
            controls={false}
          />
        </>
      ) : (
        <MainApp />
      )}
    </>
  );
}
