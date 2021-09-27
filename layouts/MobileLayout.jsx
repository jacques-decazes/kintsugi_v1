import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { use100vh } from 'react-div-100vh';

//________ Components ________
import PreviewAlert from './previewAlert';

///////////////////////////////////////////////////////////////////////////////////

const MobileLayout = ({ children, preview, doc }) => {
  const height = use100vh();

  return (
    <>
      <MobileContainer className='mobile' height={height}>
        {children}
      </MobileContainer>
    </>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const MobileContainer = styled.main``;

const StyledLoading = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 9999999;
  pointer-events: none;
  height: ${(props) => `${props.height}px`};
  width: 100vw;
  background-color: #111212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 60%;
    mix-blend-mode: lighten;
  }
`;

export default MobileLayout;
