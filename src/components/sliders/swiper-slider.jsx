import sliderLeftArrow from "@public/images/slider-left-arrow.png";
import sliderRightArrow from "@public/images/slider-right-arrow.png";
import Image from "next/image";
import React, { useRef, useState } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Dots from "../hero/slider-dots";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SwiperSlider = ({
  children,
  className,
  slidesPerView,
  spaceBetween,
  loop,
  navigation,
  pagination,
  centeredSlides,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const gotoSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex - 1);
    }
  };

  const SampleNextArrow = () => (
    <div className="sliderArrow rightArrow" onClick={handleNext}>
      <Image
        src={sliderRightArrow}
        alt="sliderRightArrow"
        priority={true}
        className="img-fluid"
      />
    </div>
  );

  const SamplePrevArrow = () => (
    <div className="sliderArrow leftArrow" onClick={handlePrev}>
      <Image
        src={sliderLeftArrow}
        alt="sliderLeftArrow"
        priority={true}
        className="img-fluid"
      />
    </div>
  );

  const classes = [];
  classes.push("swiper-slider-container");
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <Swiper
        loop={loop}
        navigation={
          navigation || {
            nextEl: ".rightArrow",
            prevEl: ".leftArrow",
          }
        }
        // pagination={{ clickable: true }}
        pagination={pagination || { clickable: true, el: ".swiper-pagination" }}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <Dots
        slidesCount={children.length}
        gotoSlide={gotoSlide}
        currentSlide={currentSlide}
      />
      <SampleNextArrow />
      <SamplePrevArrow />
    </div>
  );
};

export default SwiperSlider;
