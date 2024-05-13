import { Children, useState } from "react";
import SlickSlider from "react-slick";
import Dots from "./slider-dots";

const Slider = ({ children }) => {
  let sliderRef = null;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Children.count(children);

  const gotoSlide = (index) => {
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  };

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    swipe: false,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  return (
    <>
      <SlickSlider {...settings} ref={(slider) => (sliderRef = slider)}>
        {children}
      </SlickSlider>
      <Dots
        slidesCount={slidesCount}
        gotoSlide={gotoSlide}
        currentSlide={currentSlide}
      />
    </>
  );
};

export default Slider;
