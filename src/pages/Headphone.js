import React from "react";
import Navbar from "../component/Navbar";
import "./Headphone.css";
import Footer from "../component/Footer";
import H1 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import H2 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import H3 from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import Re from "../component/Re";
import Re2 from "../component/Re2";

function Headphone() {
  return (
    <div className="headphones">
      <div className="container">
        <Navbar />
        <div className="text">
          <h1>Headphones</h1>
        </div>
      </div>
      <div className="headphone_main">
        <div className="headphone">
          <div className="headphone_first">
            <img src={H1} alt="" />
          </div>
          <div className="headphone_sec">
            <h4>NEW PRODUCT</h4>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <h2>$ 2,999</h2>
            <button>see product</button>
          </div>
        </div>

        <div className="headphone">
          <div className="headphone_sec">
            <h4>NEW PRODUCT</h4>
            <h1>XX99 MARK I HEADPHONES</h1>
            <p>
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>
            <h2>$ 1,750</h2>
            <button>see product</button>
          </div>
          <div className="headphone_s">
            <img src={H2} alt="" />
          </div>
        </div>

        <div className="headphone">
          <div className="headphone_first">
            <img src={H3} alt="" />
          </div>
          <div className="headphone_sec">
            <h4>NEW PRODUCT</h4>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h2>$ 4,500</h2>
            <button>see product</button>
          </div>
        </div>
      </div>
<Re/>
<Re2/>
      <Footer />
    </div>
  );
}

export default Headphone;
