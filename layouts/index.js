import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

//________ Components ________
import PreviewAlert from './previewAlert';
import { Header, Footer } from 'components';

/////////////////////////// styled components /////////////////////////////////////

const ContentContainer = styled(motion.main)``;

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

export default DefaultLayout;
