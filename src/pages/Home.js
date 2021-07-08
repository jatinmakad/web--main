import React from "react";
import "./Home.css";
import Navbar from "../component/Navbar";
import Re from "../component/Re";
import P1 from "../assets/home/desktop/image-speaker-zx9.png";
import P2 from "../assets/home/desktop/image-speaker-zx7.jpg";
import P3 from "../assets/home/desktop/image-earphones-yx1.jpg";
import Re2 from "../component/Re2";
import Footer from "../component/Footer";
import data from "../data";

function Home() {
  return (
    <div className="main">
      <div className="banner img">
        <Navbar />
        <div className="first">
          <h4>new product</h4>

          <h1>XX99 mark || headhone</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See product</button>
        </div>
      </div>
      <Re />
      <div className="speak">
        <div className="speak_main">
          <div className="one">
            <div className="one_im">
              <img src={P1} alt="" />
            </div>
            <div className="one_main">
              <h1>ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound
              </p>
              <button>see product</button>
            </div>
          </div>

          <div className="two">
            <div className="two_main">
              <h1>ZX7 SPEAKER</h1>
              <button>see product</button>
            </div>
          </div>

          <div className="third">
            <img src={P3} alt="" />
            <div className="third_main">
              <h1>YX1 EARPHONES</h1>
              <button>see product</button>
            </div>
          </div>
        </div>
      </div>
      <Re2 />
      <Footer />
    </div>
  );
}

export default Home;
