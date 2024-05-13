import { useEffect } from "react";

const VideoPlayer = ({ videoUrl }) => {

  useEffect(() => {
    if (videoUrl.includes("youtube.com")) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player("video-player", {
          videoId: videoUrl.split("v=")[1],
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        });
      };

      return () => {
        document.head.removeChild(script);
        delete window.onYouTubeIframeAPIReady;
      };
    }
  }, [videoUrl]);

  return (
    <div>
      {videoUrl.includes("youtube.com") ? (
        <div id="video-player" className="video-player-container"></div>
      ) : (
        <video className="video-player-container" autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;