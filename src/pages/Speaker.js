import React from 'react'
import "./Speaker.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sp from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import Sp2 from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import Re from "../component/Re";
import Re2 from "../component/Re2";

function Speaker() {
    return (
        <>
        <div className="container">
            <Navbar/>
            <div className="text">
            <h1>speakers</h1>
            </div>
            </div>
            <div className="speaker_main">
            <div className="speaker">
            <div className="speaker_first">
                <img src={Sp} alt="" />
            </div>
            <div className="speaker_sec">
                <h4>NEW PRODUCT</h4>
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <h2>$ 4,500</h2>
                <button>see product</button>
            </div>
        </div>

        <div className="speaker_s">
            <div className="speaker_sec">
                <h1>ZX7 SPEAKER</h1>
                <p>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                <h2>$ 3,500</h2>
                <button>see product</button>
            </div>
            <div className="speaker_ss">
                <img src={Sp2} alt="" />
            </div>
        </div>
            </div>
            <Re/>
            <Re2/>

         
            <Footer/>
            </>
    )
}

export default Speaker
