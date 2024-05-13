import sliderLeftArrow from "@public/images/slider-left-arrow.png";
import sliderRightArrow from "@public/images/slider-right-arrow.png";
import Image from "next/image";
import { Children, useState } from "react";
import SlickSlider from "react-slick";
import Dots from "../hero/slider-dots";

const SlickSliderComponent = ({ children, className }) => {
  let sliderRef = null;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Children.count(children);

  const gotoSlide = (index) => {
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="sliderArrow rightArrow" onClick={onClick}>
        <Image
          src={sliderRightArrow}
          alt="sliderRightArrow"
          priority={true}
          className="img-fluid"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="sliderArrow leftArrow" onClick={onClick}>
        <Image
          src={sliderLeftArrow}
          alt="sliderLeftArrow"
          priority={true}
          className="img-fluid"
        />
      </div>
    );
  }
  //Slider Options
  const settings = {
    infinite: true,
    slidesToShow: 1.8,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const classes = [];
  classes.push("swiper-slider-container");
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <SlickSlider {...settings} ref={(slider) => (sliderRef = slider)}>
        {children}
      </SlickSlider>
      <Dots
        slidesCount={slidesCount}
        gotoSlide={gotoSlide}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default SlickSliderComponent;
