import React,{useEffect} from "react";
import "./Re.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import logo from "../assets/shared/desktop/image-headphones.png";
import logo2 from "../assets/shared/desktop/image-earphones.png";
import logo3 from "../assets/shared/desktop/image-speakers.png";
import { NavLink} from "react-router-dom";

function Re() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ma">
      <div className="cont">
        <div className="f1 f1main">
          <img src={logo} alt="" />
          <h4>headphones</h4>
          <div className="bt">
            <NavLink to="/headphone">
            <button>shop now</button>
            </NavLink>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="f2 f2main">
          <img src={logo2} alt="" />
          <h4>speakers</h4>
          <div className="bt">
          <NavLink to="/speaker">
            <button>shop now</button>
            </NavLink>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="f3 f3main">
          <img src={logo3} alt="" />
          <h4>earphones</h4>
          <div className="bt">
          <NavLink to="/earphone">
            <button>shop now</button>
            </NavLink>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Re;
