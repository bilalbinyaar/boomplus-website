import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide_1 from '../../assets/salt/salt-home-banner.jpg';

const SaltSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    // fade: true,
    // cssEase: 'linear',
  };

  // Slider content
  const slides = [
    <div className="slide-div" key={1}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
    <div className="slide-div" key={2}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
    <div className="slide-div" key={3}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
  ];
  return (
    <div className="salt-slider">
      <div className="container">
        <div className="section-title">
          <h2>Salt Brands</h2>
        </div>
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
};

export default SaltSlider;
