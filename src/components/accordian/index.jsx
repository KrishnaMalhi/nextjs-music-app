import { SongsList } from "@app/config/songs-list";
import useMediaScreens from "@app/hooks/useMediaScreens";
import arrowIcon from "@public/images/arrow-icon.png";
import closeIcon from "@public/images/close-icon.png";
import MusicPauseIcon from "@public/images/pause-icon.png";
import MusicPlayIcon from "@public/images/video-icon.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DownloadButton from "../buttons/download-button";
import MusicPlayer from "../music-player";

const Accordion = () => {
  const [openAccordions, setOpenAccordions] = useState(
    Array(SongsList.length).fill(false)
  );
  const [onMobileTablet, setOnMobileTablet] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(
    new Array(SongsList.length).fill(false)
  );
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useMediaScreens();

  const handleMusicPlaying = (index) => {
    setIsMusicPlaying((prev) => {
      const newIsMusicPlaying = [...prev];

      const prevPlayingIndex = newIsMusicPlaying.findIndex((playing) => playing);
      if (prevPlayingIndex !== -1 && prevPlayingIndex !== index) {
        newIsMusicPlaying[prevPlayingIndex] = false;
      }

      newIsMusicPlaying[index] = !newIsMusicPlaying[index];

      return newIsMusicPlaying;
    });
  };

  const playNext = (currentIndex) => {
    const nextIndex = (currentIndex + 1) % SongsList.length;
    setIsMusicPlaying((prev) => {
      const newIsMusicPlaying = [...prev];
      newIsMusicPlaying[currentIndex] = false;
      newIsMusicPlaying[nextIndex] = true;
      return newIsMusicPlaying;
    });
  };

  const playPrevious = (currentIndex) => {
    const previousIndex =
      (currentIndex - 1 + SongsList.length) % SongsList.length;
    setIsMusicPlaying((prev) => {
      const newIsMusicPlaying = [...prev];
      newIsMusicPlaying[currentIndex] = false;
      newIsMusicPlaying[previousIndex] = true;
      return newIsMusicPlaying;
    });
  };

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  useEffect(() => {
    if (
      isMobile?.landscape ||
      isMobile?.portrait ||
      isTablet?.landscape ||
      isTablet?.portrait
    ) {
      setOnMobileTablet(true);
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    if ((isDesktop || isLargeScreen) && onMobileTablet) {
      setOnMobileTablet(false);
    }
  }, [isDesktop, isLargeScreen]);

  return (
    <>
      {SongsList.length > 0 &&
        SongsList.map((songDetails, index) => (
          <div
            key={index}
            className={`accordion ${openAccordions[index] ? "open" : ""}`}
          >
            <Container fluid>
              <div className="accordion-header">
                <div className="accordion-header-author">
                  {`#${index + 1}  ${songDetails?.author}`}
                </div>
                <div className="accordion-header-content">
                  <div className="accordion-header-title">
                    <span className="accordion-title-icon">
                      {isMusicPlaying[index] ? (
                        <Image
                          src={MusicPauseIcon}
                          alt="MusicPauseIconn"
                          priority={true}
                          className="img-fluid"
                          onClick={() => handleMusicPlaying(index)}
                        />
                      ) : (
                        <Image
                          src={MusicPlayIcon}
                          alt="musicPlayIcon"
                          priority={true}
                          className="img-fluid"
                          onClick={() => handleMusicPlaying(index)}
                        />
                      )}
                    </span>
                    <span className="accordion-title-text">
                      {songDetails?.songTitle}
                    </span>
                  </div>
                  <div
                    className="accordion-header-dropdown"
                    onClick={() => toggleAccordion(index)}
                  >
                    {openAccordions[index] ? (
                      <Image
                        src={closeIcon}
                        alt="video icon"
                        priority={true}
                        className="img-fluid"
                      />
                    ) : (
                      <Image
                        src={arrowIcon}
                        alt="video icon"
                        priority={true}
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              </div>
              {onMobileTablet ? (
                <>
                  {openAccordions[index] && (
                    <div className="accordion-body">
                      <div className="song-details">
                        <div className="song-details-outer">
                          <div className="song-details-inner">
                            <p>Looped Audio: </p>
                            <p>{songDetails?.loopedAudio}</p>
                          </div>
                          <div className="song-details-inner">
                            <p>Sample Rate: </p>
                            <p>{songDetails?.simpleRate}</p>
                          </div>
                          <div className="song-details-inner">
                            <p>Audio Files: Included: </p>
                            <p>{songDetails?.audioFilesIncluded}</p>
                          </div>
                          <div className="song-details-inner">
                            <p>Bit Rate: </p>
                            <p>{songDetails?.bitRate}</p>
                          </div>
                          <div className="song-details-inner">
                            <p>Main Track Length: </p>
                            <p>{songDetails?.mainTrackLength}</p>
                          </div>
                          <div className="song-details-inner">
                            <p>Tempo (BPM): </p>
                            <p>{songDetails?.temoBPM}</p>
                          </div>
                          <div className="song-details-download-btn-container">
                            <DownloadButton />
                          </div>
                        </div>
                        <div className="song-image">
                          <Image
                            src={songDetails?.coverImage}
                            alt="video icon"
                            priority={true}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="song-author">
                        <h5>{songDetails?.author}</h5>
                        <p>{songDetails?.authorDetails}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {openAccordions[index] && (
                    <div className="accordion-body">
                      <div className="song-details">
                        <div className="song-details-inner">
                          <p>Looped Audio: </p>
                          <p>{songDetails?.loopedAudio}</p>
                        </div>
                        <div className="song-details-inner">
                          <p>Sample Rate: </p>
                          <p>{songDetails?.simpleRate}</p>
                        </div>
                        <div className="song-details-inner">
                          <p>Audio Files: Included: </p>
                          <p>{songDetails?.audioFilesIncluded}</p>
                        </div>
                        <div className="song-details-inner">
                          <p>Bit Rate: </p>
                          <p>{songDetails?.bitRate}</p>
                        </div>
                        <div className="song-details-inner">
                          <p>Main Track Length: </p>
                          <p>{songDetails?.mainTrackLength}</p>
                        </div>
                        <div className="song-details-inner">
                          <p>Tempo (BPM): </p>
                          <p>{songDetails?.temoBPM}</p>
                        </div>
                        <DownloadButton />
                      </div>
                      <div className="song-author">
                        <h5>{songDetails?.author}</h5>
                        <p>{songDetails?.authorDetails}</p>
                      </div>
                      <div className="song-image">
                        <Image
                          src={songDetails?.coverImage}
                          alt="video icon"
                          priority={true}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </Container>
            {isMusicPlaying[index] && (
              <MusicPlayer
                className="music-controller-container-outter"
                musicURL={songDetails?.songURL}
                isPlaying={isMusicPlaying[index]}
                setIsMusicPlaying={(value) => {
                  setIsMusicPlaying((prev) => {
                    const newIsMusicPlaying = [...prev];
                    newIsMusicPlaying[index] = value;
                    return newIsMusicPlaying;
                  });
                }}
                trackName={songDetails?.songTitle}
                playNext={() => playNext(index)}
                playPrevious={() => playPrevious(index)}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default Accordion;
