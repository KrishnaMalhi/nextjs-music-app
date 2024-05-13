import Accordian from "@app/components/accordian";
import CenterModeVideoSlider from "@app/modules/center-mode-video-slider";
import HomeHeroSlider from "@app/modules/home-hero-slider";
import Story from "@app/modules/story";
import VideoWithContent from "@app/modules/video-with-content";
import posterUrl from "@public/images/video-image.png";
import videoUrl from "@public/videos/placeholder-video.mp4";

const HomeScreen = () => {
  return (
    <>
      <section id="sound-library">
        <HomeHeroSlider />
      </section>
      <section id="making-of">
        <Accordian />
      </section>
      <section id="testimonial">
        <VideoWithContent videoUrl={videoUrl} posterUrl={posterUrl} />
      </section>
      <section id="about">
        <CenterModeVideoSlider />
      </section>
      <section id="partners">
        <Story />
      </section>
    </>
  );
};

export default HomeScreen;
