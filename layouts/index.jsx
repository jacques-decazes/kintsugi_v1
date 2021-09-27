import React, { useRef } from 'react';
import styled from 'styled-components';

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

export default DefaultLayout;
