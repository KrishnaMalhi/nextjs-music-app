import backwardPlayIcon from "@public/images/backward-play-icon.png";
import downloadIcon from "@public/images/download-icon.png";
import forwardPlayIcon from "@public/images/forward-play-icon.png";
import videoPauseIcon from "@public/images/pause-icon.png";
import videoPlayIcon from "@public/images/video-icon.png";
import volumeIcon from "@public/images/volume-icon.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DownloadButton from "../buttons/download-button";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const MusicPlayer = ({
  className,
  musicURL,
  isPlaying,
  setIsMusicPlaying,
  trackName,
  playNext,
  playPrevious,
}) => {
  const musicRef = useRef(null);

  const classes = [];
  classes.push("music-controller-container");
  if (className) classes.push(className);

  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeDragging, setVolumeDragging] = useState(false);
  const [onVolumeBtn, setOnVolumeBtn] = useState(false);

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.src = musicURL;
    }
  }, [musicURL]);

  useEffect(() => {
    if (isPlaying) {
      handlePlayPause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (musicRef.current.paused || musicRef.current.ended) {
      musicRef.current.play();
      setIsMusicPlaying(true);
    } else {
      musicRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    musicRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    musicRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(musicRef.current.currentTime);
  };

  const handleVolumeDrag = {
    start: () => setVolumeDragging(true),
    stop: () => setVolumeDragging(false),
    drag: (e) => {
      if (volumeDragging) {
        const boundingRect = e.target.getBoundingClientRect();
        const percentage = (e.clientX - boundingRect.left) / boundingRect.width;
        handleVolumeChange({ target: { value: percentage } });
      }
    },
  };

  const handleVolumeOnTabMob = () => {
    setOnVolumeBtn(!onVolumeBtn);
  };

  return (
    <div
      className={classes.join(" ")}
      style={{
        "--currentTime": currentTime,
        "--videoDuration": musicRef.current ? musicRef.current.duration : 0,
        "--volume": volume,
      }}
    >
      <audio
        ref={(ref) => (musicRef.current = ref)}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="controlls-container-outter">
        <div className="controlls-container">
          <div className="play-pause-controller">
            <button onClick={playPrevious} className="play-previous-button">
              <Image
                src={backwardPlayIcon}
                alt="backwardPlayIcon"
                priority={true}
                className="img-fluid"
              />
            </button>
            <button onClick={handlePlayPause} className="play-pause-button">
              {isPlaying ? (
                <Image
                  src={videoPauseIcon}
                  alt="video pause icon"
                  priority={true}
                  className="img-fluid"
                />
              ) : (
                <Image
                  src={videoPlayIcon}
                  alt="video play icon"
                  priority={true}
                  className="img-fluid"
                />
              )}
            </button>
            <button onClick={playNext} className="play-next-button">
              <Image
                src={forwardPlayIcon}
                alt="forwardPlayIcon"
                priority={true}
                className="img-fluid"
              />
            </button>
          </div>
          <div className="track-name">{trackName}</div>
          <div className="length-controller">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={musicRef.current?.duration ? musicRef.current?.duration : 0}
              step={1}
              value={currentTime}
              onChange={handleSeek}
              className="track-length"
            />
            <span>
              {formatTime(
                musicRef.current?.duration ? musicRef.current?.duration : 0
              )}
            </span>
          </div>
          <div className="volume-controller">
            <Image
              src={volumeIcon}
              alt="video volume icon"
              priority={true}
              className="img-fluid"
            />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              onMouseDown={handleVolumeDrag.start}
              onMouseUp={handleVolumeDrag.stop}
              onMouseMove={handleVolumeDrag.drag}
              className="track-volume"
            />
          </div>
        </div>
        <div className="download-btn-container">
          <DownloadButton />
        </div>
      </div>
      <div className="tab-controlls-container-outter">
        <div className="controlls-container">
          <div className="track-name">{trackName}</div>
          <div className="length-controller">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={musicRef.current?.duration ? musicRef.current?.duration : 0}
              step={1}
              value={currentTime}
              onChange={handleSeek}
              className="track-length"
            />
            <span>
              {formatTime(
                musicRef.current?.duration ? musicRef.current?.duration : 0
              )}
            </span>
          </div>
          <div className="play-pause-controller">
            <button onClick={playPrevious} className="play-previous-button">
              <Image
                src={backwardPlayIcon}
                alt="backwardPlayIcon"
                priority={true}
                className="img-fluid"
              />
            </button>
            <button onClick={handlePlayPause} className="play-pause-button">
              {isPlaying ? (
                <Image
                  src={videoPauseIcon}
                  alt="video pause icon"
                  priority={true}
                  className="img-fluid"
                />
              ) : (
                <Image
                  src={videoPlayIcon}
                  alt="video play icon"
                  priority={true}
                  className="img-fluid"
                />
              )}
            </button>
            <button onClick={playNext} className="play-next-button">
              <Image
                src={forwardPlayIcon}
                alt="forwardPlayIcon"
                priority={true}
                className="img-fluid"
              />
            </button>
          </div>
        </div>
        <div className="download-volume-container">
          <div className="volume-controller">
            <span>
              <Image
                src={volumeIcon}
                alt="video volume icon"
                priority={true}
                className="img-fluid"
                onClick={handleVolumeOnTabMob}
              />
            </span>
            {onVolumeBtn && (
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                onMouseDown={handleVolumeDrag.start}
                onMouseUp={handleVolumeDrag.stop}
                onMouseMove={handleVolumeDrag.drag}
                className="track-volume"
              />
            )}
          </div>
          <button className="download-button">
            <Image
              src={downloadIcon}
              alt="downloadIcon"
              priority={true}
              className="img-fluid"
            />
          </button>
        </div>
      </div>
      <div className="mob-controlls-container-outter">
        <div className="controlls-container">
          <div className="track-name">{trackName}</div>
          <div className="length-controller">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={musicRef.current?.duration ? musicRef.current?.duration : 0}
              step={1}
              value={currentTime}
              onChange={handleSeek}
              className="track-length"
            />
            <span>
              {formatTime(
                musicRef.current?.duration ? musicRef.current?.duration : 0
              )}
            </span>
          </div>
          <div className="play-pause-download-volume-container">
            <div className="play-pause-controller">
              <button onClick={playPrevious} className="play-previous-button">
                <Image
                  src={backwardPlayIcon}
                  alt="backwardPlayIcon"
                  priority={true}
                  className="img-fluid"
                />
              </button>
              <button onClick={handlePlayPause} className="play-pause-button">
                {isPlaying ? (
                  <Image
                    src={videoPauseIcon}
                    alt="video pause icon"
                    priority={true}
                    className="img-fluid"
                  />
                ) : (
                  <Image
                    src={videoPlayIcon}
                    alt="video play icon"
                    priority={true}
                    className="img-fluid"
                  />
                )}
              </button>
              <button onClick={playNext} className="play-next-button">
                <Image
                  src={forwardPlayIcon}
                  alt="forwardPlayIcon"
                  priority={true}
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="download-volume-container">
              <div className="volume-controller">
                <span>
                  <Image
                    src={volumeIcon}
                    alt="video volume icon"
                    priority={true}
                    className="img-fluid"
                    onClick={handleVolumeOnTabMob}
                  />
                </span>
                {onVolumeBtn && (
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    onMouseDown={handleVolumeDrag.start}
                    onMouseUp={handleVolumeDrag.stop}
                    onMouseMove={handleVolumeDrag.drag}
                    className="track-volume"
                  />
                )}
              </div>
              <button className="download-button">
                <Image
                  src={downloadIcon}
                  alt="downloadIcon"
                  priority={true}
                  className="img-fluid"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
