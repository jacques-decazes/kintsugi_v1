import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import ManifesteText from 'assets/svg/manifeste-text.js';

////////////////////////////////////////////////////////////////////////////////////

const Manifeste = () => {
  const { height } = useWindowSize();

  return (
    <StyledSection>
      <div className='images'>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            src='/jpg/head-1.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            src='/jpg/head-2.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            src='/jpg/head-3.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            src='/jpg/head-4.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
      >
        <ManifesteText />
      </motion.div>
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 10vw 0vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .images {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 8vh;

    &-item {
      overflow: hidden;
      width: 24%;
      margin-bottom: 2%;
      background-color: #cda529;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1024px) {
        width: 49%;
      }

      & img {
        width: 103%;
        height: 100%;
      }
    }
  }
  & svg {
    width: 80vw;
  }
`;

export default Manifeste;
