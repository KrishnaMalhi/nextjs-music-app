import SwiperSlider from "@app/components/sliders/swiper-slider";
import Heading from "@app/components/typography/heading";
import Text from "@app/components/typography/text";
import VideoComponent from "@app/components/video-component/video-component";
import useMediaScreens from "@app/hooks/useMediaScreens";
import posterUrl from "@public/images/center-mode-slider.png";
import rightArrowIcon from "@public/images/right-arrow-icon.png";
import videoUrl from "@public/videos/placeholder-video.mp4";
import Image from "next/image";
import { useEffect, useState } from "react";

const CenterModeVideoSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(0);
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useMediaScreens();

  useEffect(() => {
    if (isMobile?.landscape) {
      setSpaceBetween(0);
    }
    if (isMobile?.portrait) {
      setSpaceBetween(0);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile?.portrait || isMobile?.landscape) {
      setSlidesPerView(1.3);
    }
  }, [isMobile]);

  useEffect(() => {
    if (
      (isTablet?.portrait, isTablet?.landscape || isDesktop || isLargeScreen)
    ) {
      setSlidesPerView(1.8);
      setSpaceBetween(0);
    }
  }, [isTablet, isLargeScreen, isDesktop]);

  return (
    <section className="video-slider-section">
      <div className="video-slider-container">
        <SwiperSlider
          className="swiper-slider-container-outter"
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={true}
          centeredSlides={true}
        >
          <div className="slide">
            <div className="video-slider-top-content">
              <Heading className="top-left-heading" heavy>
                Yasmeen
              </Heading>
              <div className="top-middle-arrow">
                <Image
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <Heading className="top-right-heading" heavy>
                Al-Khafaji
              </Heading>
            </div>
            <VideoComponent className={"video-component"} videoUrl={videoUrl}>
              <Image
                src={posterUrl}
                alt="poster"
                priority={true}
                className="img-fluid"
              />
            </VideoComponent>
          </div>
          <div className="slide">
            <div className="video-slider-top-content">
              <Heading className="top-left-heading" heavy>
                Yasmeen
              </Heading>
              <div className="top-middle-arrow">
                <Image
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <Heading className="top-right-heading" heavy>
                Al-Khafaji
              </Heading>
            </div>
            <VideoComponent className={"video-component"} videoUrl={videoUrl}>
              <Image
                src={posterUrl}
                alt="poster"
                priority={true}
                className="img-fluid"
              />
            </VideoComponent>
          </div>
          <div className="slide">
            <div className="video-slider-top-content">
              <Heading className="top-left-heading" heavy>
                Yasmeen
              </Heading>
              <div className="top-middle-arrow">
                <Image
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <Heading className="top-right-heading" heavy>
                Al-Khafaji
              </Heading>
            </div>
            <VideoComponent className={"video-component"} videoUrl={videoUrl}>
              <Image
                src={posterUrl}
                alt="poster"
                priority={true}
                className="img-fluid"
              />
            </VideoComponent>
          </div>
          <div className="slide">
            <div className="video-slider-top-content">
              <Heading className="top-left-heading" heavy>
                Yasmeen
              </Heading>
              <div className="top-middle-arrow">
                <Image
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <Heading className="top-right-heading" heavy>
                Al-Khafaji
              </Heading>
            </div>
            <VideoComponent className={"video-component"} videoUrl={videoUrl}>
              <Image
                src={posterUrl}
                alt="poster"
                priority={true}
                className="img-fluid"
              />
            </VideoComponent>
          </div>
          <div className="slide">
            <div className="video-slider-top-content">
              <Heading className="top-left-heading" heavy>
                Yasmeen
              </Heading>
              <div className="top-middle-arrow">
                <Image
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <Heading className="top-right-heading" heavy>
                Al-Khafaji
              </Heading>
            </div>
            <VideoComponent className={"video-component"} videoUrl={videoUrl}>
              <Image
                src={posterUrl}
                alt="poster"
                priority={true}
                className="img-fluid"
              />
            </VideoComponent>
          </div>
        </SwiperSlider>
      </div>
      <div className="video-slider-bottom-content">
        <Text
          className="bottom-content"
          hasAnimation
          animation="fadeInUp"
          delay={1500}
        >
          WLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </div>
    </section>
  );
};

export default CenterModeVideoSlider;
