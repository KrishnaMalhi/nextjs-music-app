import Heading from "@app/components/typography/heading";
import Text from "@app/components/typography/text";
import VideoComponent from "@app/components/video-component/video-component";
import Image from "next/image";

const VideoWithContent = ({ videoUrl, posterUrl }) => {
  const RenderVideo = () => (
    <VideoComponent className="video-component" videoUrl={videoUrl}>
      <Image src={posterUrl} alt="video poster" className="img-fluid" />
    </VideoComponent>
  );

  return (
    <div className="video-with-content">
      <div className="mobile-poster-heading">
        <Heading className="poster-heading" heavy>
          Designed By Foley Artist
        </Heading>
      </div>
      <RenderVideo />
      <div className="poster-content">
        <div className="poster-content-inner">
          <div className="poster-left-content">
            <Heading className="poster-left-heading" heavy>
              Designed
            </Heading>
            <Heading className="poster-left-heading" heavy>
              Foley
            </Heading>
          </div>

          <div className="poster-right-content">
            <Heading className="poster-right-heading" heavy>
              By
            </Heading>
            <Heading className="poster-right-heading" heavy>
              Artists
            </Heading>
          </div>
        </div>
        <div className="poster-bottom-content">
          <Text className="description" light>
            Out of respect for the refugees who shared their stories, every
            detail of each soundtrack was carefully crafted, taking into
            consideration their descriptions of exactly what occurred in the
            events they described.
          </Text>
          <Text className="description" light>
            Using the information gathered in their testimonials, we invited
            foley artists and sound engineers to recreate those sounds with
            everyday items. Just like that, a sewing machine became a passing
            tank, a water stream transformed into an explosion, popcorn drops
            mimicked gunshots, and traumas that caused pain became a form of
            healing for those who suffered.
          </Text>
        </div>
      </div>
      <div className="mobile-poster-bottom-content">
        <Text className="description" light>
          Out of respect for the refugees who shared their stories, every detail
          of each soundtrack was carefully crafted, taking into consideration
          their descriptions of exactly what occurred in the events they
          described.
        </Text>
        <Text className="description" light>
          Using the information gathered in their testimonials, we invited foley
          artists and sound engineers to recreate those sounds with everyday
          items. Just like that, a sewing machine became a passing tank, a water
          stream transformed into an explosion, popcorn drops mimicked gunshots,
          and traumas that caused pain became a form of healing for those who
          suffered.
        </Text>
      </div>
    </div>
  );
};

export default VideoWithContent;
