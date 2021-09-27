import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  BrowserView,
  MobileView,
  isDesktop,
  isMobile,
} from 'react-device-detect';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

///////////////////////////////////////////////////////////////////////////////////

const DefaultLayout = ({ children, preview, doc }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        class: 'is-reveal',
        getDirection: true,
        lerp: 0.1,
        offset: ['-20%', 0],

        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //...all the dependencies you want to watch to update the scroll
        ]
      }
      containerRef={containerRef}
    >
      <ContentContainer data-scroll-container ref={containerRef}>
        {children}
      </ContentContainer>
    </LocomotiveScrollProvider>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const ContentContainer = styled.main``;

const StyledLoading = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 9999999;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  background-color: #111212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 30%;
    mix-blend-mode: lighten;
  }
`;

export default DefaultLayout;
