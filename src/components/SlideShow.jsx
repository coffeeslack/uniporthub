import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slideShow.css";

export default function SimpleSlider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          lazyLoad: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          lazyLoad: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: false,
          // dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, i) => (
        <div className="sliderDiv" key={i}>
          <div>
            <img src={slide.image} alt={slide.image.name} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
