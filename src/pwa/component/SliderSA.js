import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/scss/SliderSA.scss";
import { User } from '../../service/';

function SliderSA() {
  const { setUserAuthFN ,userAuth } = useContext(User.Context);
  const onClick = (e) =>{
    if(!userAuth.data){
      e.preventDefault()
      setUserAuthFN(userAuth.status , userAuth.data , true)
    }
  }


  return (
    <div className="slider-sa">
      <Slider draggable={false} arrows={false} autoplay={true} dots={true}>
        <Link to="/about" className="slider--item" onClick={onClick}>
          <img
            src={"https://m.ubet8866.com/static/media/banner-image1.875c41ac.png"}
            alt=""
          />
        </Link>
        <Link to="/about" className="slider--item" onClick={onClick}>
          <img
            src={"https://m.ubet8866.com/static/media/banner-image2.637e7a41.png"}
            alt=""
          />
        </Link>
        <Link to="/about" className="slider--item" onClick={onClick}>
          <img
            src={"https://m.ubet8866.com/static/media/banner-image3.81f42b83.png"}
            alt=""
          />
        </Link>
      </Slider>
    </div>
  );
}

export default SliderSA;
