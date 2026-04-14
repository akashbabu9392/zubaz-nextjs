 
"use client";

import { useState } from "react"; 
import { IoClose } from "react-icons/io5";
import { Link } from "../../../common/link";
 

const HeroSection = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true); 
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/Q5PG0rMXgvw";
      
    }
  };

  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "";
    }
  };

  return (
    <>
      <div
        className="zubuz-hero-section white-bg"
        style={{ backgroundImage: "url(/images/v1/hero-shape1.png)" }}
      >
        <div className="container">
          <div className="zubuz-hero-content center position-relative">
            <h1>Manage your money better than ever</h1>
            <p>
              Our finance app is designed to help individuals &amp; businesses
              manage their financial activities and transactions. It serves
              various purposes related to personal and business finance.
            </p>
            <div className="zubuz-hero-btn-wrap center">
              <Link className="zubuz-default-btn" to="/contact-us">
                <span>Start Your Free Trial</span>
              </Link>
              <button
                className="video-init zubuz-hero-video"
                onClick={openPopup}
              >
                <img src="/assets/images/v1/play-btn.png" alt="img" />
                Watch A Demo
              </button>
            </div>
            <div className="zubuz-hero-shape">
              <img src="/assets/images/v1/shape.png" alt="img" />
            </div>
          </div>
          <div className="zubuz-hero-bottom">
            <div className="zubuz-hero-thumb wow fadeInUpX">
              <img src="/assets/images/v1/hero-mocup1.png" alt="img" />
            </div>
            <div className="zubuz-hero-card card1 wow zoomIn">
              <img src="/assets/images/v1/h-card1.png" alt="img" />
            </div>
            <div className="zubuz-hero-card card2 wow zoomIn">
              <img src="/assets/images/v1/h-card2.png" alt="img" />
            </div>
            <div className="zubuz-hero-card card3 wow zoomIn">
              <img src="/assets/images/v1/h-card4.png" alt="img" />
            </div>
            <div className="zubuz-hero-card card4 wow zoomIn">
              <img src="/assets/images/v1/h-card3.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`popup-video ${popup ? "popup" : "popdown"}`}
        onClick={closePopup}
      >
        <div className="video-wrapper">
          <iframe
            id="youtube-video"
            className="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Q5PG0rMXgvw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <button className="close-button" onClick={closePopup}>
            <IoClose className="close-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
