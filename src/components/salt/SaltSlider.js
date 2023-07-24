import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide_1 from '../../assets/salt/slider/Diamond-Salt-SnP-500g.jpg';
// import slide_2 from '../../assets/salt/slider/Diamond-Salt-SnP-500g.jpg';
// import slide_3 from '../../assets/salt/slider/Diamond-Salt-SnP-500g.jpg';
// import slide_4 from '../../assets/salt/slider/Diamond-Salt-SnP-500g.jpg';
import slide_2 from '../../assets/salt/slider/Salt-Trial-01-Salt-Tower-25kg-Front-2.jpg';
import slide_3 from '../../assets/salt/slider/Yamy-125g-scaled.jpg';
import slide_4 from '../../assets/salt/slider/Yamy-Salt-5kg.jpg';

const SaltSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
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
      <div className='slide-product'>
        <img src={slide_1} alt="banner-slide" />
        <div className='slide-td'>
          <h3>Title</h3>
          <p>description</p>
        </div>
      </div>
      
    </div>,
    <div className="slide-div" key={2}>
      <div className='slide-product'>
        <img src={slide_2} alt="banner-slide" />
        <div className='slide-td'>
          <h3>Title</h3>
          <p>description</p>
        </div>
      </div>
    </div>,
    <div className="slide-div" key={3}>
      <div className='slide-product'>
        <img src={slide_3} alt="banner-slide" />
        <div className='slide-td'>
          <h3>Title</h3>
          <p>description</p>
        </div>
      </div>
    </div>,
    <div className="slide-div" key={4}>
      <div className='slide-product'>
        <img src={slide_4} alt="banner-slide" />
        <div className='slide-td'>
          <h3>Title</h3>
          <p>description</p>
        </div>
      </div>
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
