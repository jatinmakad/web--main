import React from 'react';
import "./Earphone.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Ear from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import Re from "../component/Re";
import Re2 from "../component/Re2";
import { NavLink } from "react-router-dom";


function Earphone() {
    return (
        <>
        <div className="container">
        <Navbar/>
        <div className="text">
        <h1>earphones</h1>
        </div>
        </div>
        <div className="earphone">
            <div className="earphone_first">
                <img src={Ear} alt="" />
            </div>
            <div className="earphone_sec">
                <h4>NEW PRODUCT</h4>
                <h1>YX1 WIRELESS EARPHONES</h1>
                <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <h2>$ 599</h2>
             
             <NavLink to="/earphone/earphones">
            see product
             </NavLink>
            </div>
        </div>
        <Re/>
        <Re2/>

        <Footer/>
        </>
    )
}

export default Earphone
