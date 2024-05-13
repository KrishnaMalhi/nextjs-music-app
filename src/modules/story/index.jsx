import SwiperSlider from "@app/components/sliders/swiper-slider";
import VideoComponent from "@app/components/video-component/video-component";
import { StoryVideoSliderList } from "@app/config/story-video-slider-list";
import useMediaScreens from "@app/hooks/useMediaScreens";
import storyBackground from "@public/images/story-background.png";
import storyImage1 from "@public/images/story-image1.png";
import storyImage2 from "@public/images/story-image2.png";
import storyImage3 from "@public/images/story-image3.png";
import { Parallax } from "react-parallax";
import Image from "next/image";
import { useEffect, useState } from "react";

const Story = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useMediaScreens();

  useEffect(() => {
    if (isMobile?.portrait || isMobile?.landscape) {
      setSlidesPerView(1.2);
    }
  }, [isMobile]);

  useEffect(() => {
    if ((isTablet?.portrait, isTablet?.landscape)) {
      setSlidesPerView(2.5);
    }
  }, [isTablet]);

  useEffect(() => {
    if (isLargeScreen || isDesktop) {
      setSlidesPerView(3);
    }
  }, [isLargeScreen, isDesktop]);

  const divStyle = {
    backgroundImage: `url(${storyBackground.src})`,
  };

  const parallaxDelay = 0.2;
  return (
    <div className="story-container">
      <div className="parallax-container-outter">
        <div className="parallax-container">
          <Parallax bgImage={storyBackground.src} strength={400}>
            <div className="parallax-container-inner">
              <div className="top-content">
                <div className="top-left">
                  <h1>(Our Story)</h1>
                  <p>(20 - 23)</p>
                </div>
                <div className="top-right">
                  <Image
                    src={storyImage1}
                    alt="Top Right Image"
                    priority
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="text-content">
                <p>
                  Conflicts in the Middle East have displaced more than 8.4
                  million people, making this a human crisis second only to
                  World War II. Studies show that 90% of refugee children suffer
                  from post-traumatic stress disorder. So, every time they hear
                  helicopters, sirens, wailing babies, crashing glass, and many
                  other mundane sounds, their scars are reopened. To turn these
                  kids’ harsh trauma into something that can benefit them, we
                  created Sound Affects. A set of sound effects designed by
                  foley artists and owned by the refugees themselves. Helping
                  raise funds for psychological treatment and traumatic support.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
        {/* <Parallax strength={400}> */}
          <div className="bottom-content">
            <div className="bottom-left">
              <Image
                src={storyImage2}
                alt="Bottom Left Image"
                priority
                className="img-fluid"
              />
            </div>
            <div className="bottom-right">
              <Image
                src={storyImage3}
                alt="Bottom Right Image"
                priority
                className="img-fluid"
              />
            </div>
          </div>
        {/* </Parallax> */}
      </div>
      <div className="story-slider-container">
        <div className="story-slider-container-top">
          <h1>(Our Story)</h1>
          <p>(20 - 23)</p>
        </div>
        <hr />
        <SwiperSlider
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop={true}
          navigation={false}
          pagination={false}
          className="swiper-slider-container-outter"
          centeredSlides={false}
        >
          {StoryVideoSliderList.length > 0 &&
            StoryVideoSliderList.map((slide, index) => (
              <div className="slide" key={index}>
                <VideoComponent
                  className={"video-component"}
                  videoUrl={slide?.videoUrl}
                >
                  <Image
                    src={slide?.posterUrl}
                    alt="poster"
                    priority={true}
                    className="img-fluid"
                  />
                </VideoComponent>
              </div>
            ))}
        </SwiperSlider>
      </div>
    </div>
  );
};

export default Story;
