import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComp = ({ min, max, value, onChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => onChange(currentSlide + min),
  };

  return (
    <div>
      <Slider {...settings}>
        {Array.from({ length: max - min + 1 }).map((_, index) => (
          <div key={index}>{index + min}</div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
