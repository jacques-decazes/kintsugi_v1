import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

//________ Components ________
import PreviewAlert from './previewAlert';

///////////////////////////////////////////////////////////////////////////////////

const DesktopLayout = ({ children, preview, doc }) => {
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
      <StyledLoading
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.8 }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.6 }}
          src='/gif/preload.gif'
          alt='preloader kintsugi'
        />
      </StyledLoading>
    </LocomotiveScrollProvider>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const ContentContainer = styled(motion.main)``;

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

export default DesktopLayout;
