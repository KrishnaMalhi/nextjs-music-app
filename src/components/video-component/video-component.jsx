import videoPlayIcon from "@public/images/video-play-icon.png";
import Image from "next/image";
import Modal from "../modal";
import VideoPlayer from "./video-player";

const VideoComponent = ({ children, className, videoUrl }) => {
  const classes = [];
  classes.push("video-box");
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <div className="video-link">
        <Modal
          component={<VideoPlayer videoUrl={videoUrl} />}
          contentClassName="asset-modal"
          clickArea="click-area"
        >
          <div className="video-icon">
            <Image
              src={videoPlayIcon}
              alt="video icon"
              priority={true}
              className="img-fluid"
            />
          </div>
        </Modal>
      </div>
      <div className="video-box-children">{children}</div>
    </div>
  );
};

export default VideoComponent;
