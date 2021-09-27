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
      <ContentContainer>{children}</ContentContainer>
      <StyledLoading
        height={height}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.8 }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          src='/gif/preload.gif'
          alt='preloader kintsugi'
        />
      </StyledLoading>
    </>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const ContentContainer = styled(motion.main)``;

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
