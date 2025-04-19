import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/util.css';
import '../css/main.css';
import '../css/custom-slider.css';

import slide1 from '../images/slide-01.jpg';
import slide2 from '../images/slide-02.jpg';
import slide3 from '../images/slide-03.jpg';

const Slider = () => {
  useEffect(() => {
    $('.slick-slider').not('.slick-initialized').slick({
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      infinite: true,
      fade: true,
      speed: 1000,
    });
  }, []);

  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div className="slick-slider">
          <div className="item-slick1" style={{ backgroundImage: `url(${slide1})` }}>
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
                  <span className="ltext-101 cl2 respon2">Women Collection 2025</span>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">New Season</h2>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
                  <a href="#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item-slick1" style={{ backgroundImage: `url(${slide2})` }}>
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
                  <span className="ltext-101 cl2 respon2">Men New-Arrivals</span>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay="800">
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">Jackets & Coats</h2>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
                  <a href="#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item-slick1" style={{ backgroundImage: `url(${slide3})` }}>
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay="0">
                  <span className="ltext-101 cl2 respon2">Accessories</span>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay="800">
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">New Trend</h2>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
                  <a href="#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
