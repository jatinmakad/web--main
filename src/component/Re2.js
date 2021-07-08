import React from "react";
import "./Re2.css";
import Man from "../assets/shared/desktop/image-best-gear.jpg";

function Re2() {
  return (
      <div className="re2_main">
<div className="re2">
      <div className="tex">
        <h1>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={Man} alt="" />
    </div>
      </div>
    
  );
}

export default Re2;
