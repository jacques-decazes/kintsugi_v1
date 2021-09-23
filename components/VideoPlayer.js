import React, { useState, useRef, useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import ScrollAnimation from 'react-animate-on-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styled from 'styled-components';

import {
  PlayBtn,
  PauseBtn,
  MuteBtn,
  UnMuteBtn,
} from 'assets/svg/video-player-icons';

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 8vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
`;

const StyledThumbnail = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
  }
  & span {
    position: absolute;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
    padding: 0 5rem;
    line-height: 5rem;
    border-radius: 4rem;
    font-size: 0.8rem;
    color: #90ec5d;
    background: #000000;
    transition: background-color 500ms cubic-bezier(0, 0.56, 0.185, 0.99);
    cursor: pointer;
    &:hover {
      background: #90ec5d;
      color: #000000;
    }
    @media (max-width: 576px) {
      font-size: 0.7rem;
      padding: 0 3rem;
      line-height: 4rem;
    }
  }
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: visible;
  z-index: 999998;
  background-color: black;
`;
const StyledVideo = styled.video`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  visibility: visible;
  z-index: 999999;
  opacity: 0;
`;

const StyledGradient = styled.div`
  visibility: visible;
  position: fixed;
  width: 100vw;
  height: 20vh;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 999999;
  opacity: 0;
`;

const StyledControls = styled.div`
  visibility: visible;
  opacity: 1;
  bottom: 8vh;
  position: fixed;
  z-index: 100000000;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0;
`;

const StyledBtnPlay = styled.div`
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  & svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
  }
`;

const StyledBtnPause = styled.div`
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  & svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
  }
`;

const StyledBtnMute = styled.div`
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  & svg {
    width: 20px;
    height: 15px;
    fill: #ffffff;
  }
`;

const StyledBtnUnMute = styled.div`
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  & svg {
    width: 10px;
    height: 15px;
    fill: #ffffff;
  }
`;

const StyledTimeLine = styled.div`
  display: flex;
  align-items: center;
  & p {
    position: relative;
    font-size: 0.78rem;
    margin-right: 1rem;
    font-family: sans-serif;
  }
  & progress[value] {
    margin-right: 1rem;
    position: relative;
    cursor: pointer;
    /* Reset the default appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 40vw;
    height: 2px;
    //   color: white;
  }
  & progress[value]::-webkit-progress-bar {
    background-color: rgba(83, 83, 83, 0.4);
  }
  & progress[value]::-webkit-progress-value {
    background-color: #90ec5d;
  }
  & progress[value]::-moz-progress-bar {
    background-color: rgb(134, 134, 134);
  }
`;

////////////////////////////////////////////////////////////////////////////////////

const VideoPlayer = ({ content }) => {
  /////////////////// VIDEOPLAYER LOGIC //////////////////////////
  const [videoPosition, setVideoPosition] = useState(false);
  const [toggleIconPlay, setToggleIconPlay] = useState(false);
  const [toggleIconMute, setToggleIconMute] = useState(false);

  const video = useRef(null);
  const overlay = useRef(null);
  const controlsRef = useRef(null);
  const gradientRef = useRef(null);

  const handlePlayVideo = () => {
    setToggleIconPlay(false);
    setToggleIconMute(false);
    setVideoPosition(true);
    video.current.play();
    document.body.className = 'body overflow';
    gsap.set(video.current, { volume: 0 });
    gsap.to(video.current, { volume: 1, duration: 0.5 });
    gsap.fromTo(
      overlay.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          gsap.fromTo(
            video.current,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
            }
          );
          gsap.fromTo(
            gradientRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
            }
          );
          gsap.fromTo(
            controlsRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
            }
          );
        },
      }
    );
  };

  const handleCloseVideo = () => {
    document.body.className = 'body ';
    gsap.to(video.current, { volume: 0, duration: 0.3 });
    gsap.to(gradientRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
    });
    gsap.to(controlsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
    });
    gsap.to(video.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        video.current.pause();
        gsap.to(overlay.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            setVideoPosition(false);
          },
        });
      },
    });
  };
  ////////////// VIDEO PLAYER CONTROLS SHOW HIDE MOUSE MOVE /////////////

  // let timer = 0
  // const handleResetTimer = () => {
  //   timer = 0
  // }
  // const addEventListenersCursor = () => {
  //   document.addEventListener("mousemove", handleResetTimer)
  // }

  // const removeEventListenersCursor = () => {
  //   document.removeEventListener("mousemove", handleResetTimer)
  // }
  // useEffect(() => {
  //   const intervalId = setInterval(function () {
  //     timer++
  //     if (timer >= 2) {
  //       TweenLite.to(controlsRef.current, 0.3, {
  //         opacity: 0,
  //       })
  //       TweenLite.to(gradientRef.current, 0.6, {
  //         opacity: 0,
  //       })
  //     } else {
  //       TweenLite.to(controlsRef.current, 0.3, {
  //         opacity: 1,
  //       })
  //       TweenLite.to(gradientRef.current, 0.6, {
  //         opacity: 1,
  //       })
  //     }
  //   }, 1000)

  //   addEventListenersCursor()
  //   return () => {
  //     removeEventListenersCursor()
  //     clearInterval(intervalId)
  //   }
  // }, [])

  /////////////////// VIDEOPLAYER SCROLL LOGIC //////////////////////////

  // const [scrollPosition, setScrollPosition] = useState(0)

  // useScrollPosition(({ prevPos, currPos }) => {
  //   // setScrollPosition(currPos.y)
  //   if (currPos.y < prevPos.y && !video.current.paused) {
  //     video.current.pause()
  //     handleCloseVideo()
  //   }
  // })

  /////////////////// VIDEOPLAYER CONTROLS //////////////////////////

  //////// PLAY/PAUSE BTN LOGIC ////////
  const handlePlayPause = () => {
    if (video.current.paused) {
      setToggleIconPlay(false);
      video.current.play();
    } else {
      setToggleIconPlay(true);
      video.current.pause();
    }
  };

  //////// MUTE BTN LOGIC ////////
  const btnMute = useRef(null);
  const handleMuteSound = () => {
    if (video.current.volume === 0) {
      setToggleIconMute(false);
      gsap.to(video.current, { volume: 1, duration: 0.3 });
    } else {
      setToggleIconMute(true);
      gsap.to(video.current, { volume: 0, duration: 0.3 });
    }
  };

  //////// PROGRESSBAR LOGIC ////////
  const progressBar = useRef(null);
  const handleSeek = (event) => {
    const percent = event.nativeEvent.offsetX / progressBar.current.offsetWidth;
    video.current.currentTime = percent * video.current.duration;
    event.target.value = Math.floor(percent / 100);
  };

  //////// TIMESTAMP LOGIC ////////
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const handleUpdateProgressBar = () => {
    const time = video.current.currentTime;
    let curmins = Math.floor(time / 60);
    let cursecs = Math.floor(time - curmins * 60);

    if (cursecs < 10) {
      setSeconds('0' + cursecs);
    } else {
      setSeconds(cursecs);
    }

    if (curmins < 10) {
      setMinutes('0' + curmins);
    }

    const percentage = Math.floor(
      (100 / video.current.duration) * video.current.currentTime
    );
    progressBar.current.value = percentage;
  };

  return (
    <StyledSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
    >
      <StyledTitle>Les marmottes prennent le large</StyledTitle>
      <StyledThumbnail>
        <img src={content.hp_video_thumbnail.url} />
        <span className='playerPost-container-cta' onClick={handlePlayVideo}>
          voir la video
        </span>
      </StyledThumbnail>

      <StyledOverlay
        className={videoPosition ? '' : 'hidden'}
        ref={overlay}
        onClick={handleCloseVideo}
      />
      <StyledVideo
        className={videoPosition ? '' : 'hidden'}
        preload='metadata'
        ref={video}
        crossOrigin='anonymous'
        onClick={handleCloseVideo}
        onEnded={handleCloseVideo}
        onTimeUpdate={handleUpdateProgressBar}
      >
        <source src={content.hp_video.url} type='video/mp4' />
      </StyledVideo>
      <StyledGradient
        ref={gradientRef}
        className={videoPosition && !isMobile ? '' : ' hidden'}
      />
      <StyledControls
        ref={controlsRef}
        className={
          videoPosition && !isMobile
            ? 'playerPost-container-controls'
            : 'playerPost-container-controls hidden'
        }
      >
        {toggleIconPlay && (
          <StyledBtnPlay onClick={handlePlayPause}>
            <PlayBtn />
          </StyledBtnPlay>
        )}
        {!toggleIconPlay && (
          <StyledBtnPause onClick={handlePlayPause}>
            <PauseBtn />
          </StyledBtnPause>
        )}
        <StyledTimeLine>
          <p>{`${minutes}:${seconds}`}</p>
          <progress
            ref={progressBar}
            min='0'
            max='100'
            value='0'
            onClick={handleSeek}
          ></progress>
        </StyledTimeLine>
        {!toggleIconMute && (
          <StyledBtnMute onClick={handleMuteSound}>
            <MuteBtn />
          </StyledBtnMute>
        )}
        {toggleIconMute && (
          <StyledBtnUnMute onClick={handleMuteSound}>
            <UnMuteBtn />
          </StyledBtnUnMute>
        )}
      </StyledControls>
    </StyledSection>
  );
};

export default VideoPlayer;
