import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="images">
          <img
            className="image"
            src="./images/profile1.jpeg"
            alt="이미지 로드 실패"
          />
        </div>
        <div className="images">
          <img
            className="image"
            src="./images/profile2.jpeg"
            alt="이미지 로드 실패"
          />
        </div>
        <div className="images">
          <img
            className="image"
            src="./images/profile0.jpeg"
            alt="이미지 로드 실패"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
