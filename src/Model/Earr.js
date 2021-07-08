import React, { useState } from "react";
import "./Ear.css";
import Ear from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import Ear1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import Ear2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import Ear3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Re from "../component/Re";
import Re2 from "../component/Re2";
import data from "../data";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Earr(props) {
  const [count, setCount] = useState(1);
  const [update,setUpdate] = useState([]);
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const inc = () =>{
    setCount(count + 1);
  }
  const hand= (product) =>{
     setUpdate("ADDED!");
     const exist = update.find((x) => x.id === product.id);
     if(exist){
       setUpdate(
         update.map((x) =>
         x.id === product.id ? {...exist , qty: exist.qty + 1}:x)
       );
     }else setUpdate([...update, {...product,qty:1}]);


  }
  const {products} = data;
  return (
    <div>
      <Navbar />
      <div className="earphone">
        <div className="earphone_first">
          <img src={Ear} alt="" />
        </div>
        <div className="earphone_sec">
          <h4>NEW PRODUCT</h4>
          <h1>YX1 WIRELESS EARPHONES</h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <h2>$ 599</h2>
          <div>
          {products.map((item)=>(
            <div>
<h1>{item.name}</h1>
<h2>{item.price}</h2>
<div className="coun">
            <div className="coun1">
              <div className="decrease" onClick={dec}>
                <RemoveIcon />
              </div>
              {count}
            
              <div className="increase" onClick={inc}>
                <AddIcon />
              </div>
            </div>
            <div className="coun2">
              <button className="coun_bt" onClick={hand}>{update}</button>
            </div>
          </div> 
            </div>


))}

          </div>
         
          {/* <div className="coun">
            <div className="coun1">
              <div className="decrease" onClick={dec}>
                <RemoveIcon />
              </div>
              {count}
            
              <div className="increase" onClick={() => setCount(count + 1)}>
                <AddIcon />
              </div>
            </div>
            <div className="coun2">
              <button className="coun_bt" onClick={hand}>{update}</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="features">
        <div className="text1">
          <h1>FEATURES</h1>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive sound
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="text2">
          <h1>IN THE BOX</h1>
          <div className="lis">
            <ul className="lis1">
              <li>2X</li>
              <li>6X</li>
              <li>1X</li>
              <li>1X</li>
              <li>1X</li>
            </ul>
            <ul className="lis2">
              <li>Earphone unit</li>
              <li>Multi-size earplugs</li>
              <li>User manual</li>
              <li>USB-C charging cable</li>
              <li>Travel pouch</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ear_img">
        <div className="ear_img1">
          <img src={Ear1} alt="" />
          <img src={Ear2} alt="" />
        </div>
        <div className="ear_img2">
          <img src={Ear3} alt="" />
        </div>
      </div>
      <Re />
      <Re2 />
      <Footer />
    </div>
  );
}

export default Earr;

