import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/////////////////////////// styled components /////////////////////////////////////

const StyledDownArrow = styled(motion.div)`
  /* position: ${(props) => (props.isMobile ? 'relative' : 'absolute')}; */
  /* top: ${(props) => (props.isMobile ? 0 : '34vmin')}; */
  /* left: calc(50% - 25px); */
  z-index: 4;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: ${(props) => props.text_color};
  border: 1px solid ${(props) => props.text_color};
  /* background-color: ${(props) => props.text_color}; */
  transition: 0.5s ease-out 0.5s;
  line-height: 48px;
  text-align: center;
  opacity: 1;
  /* margin: 6vh auto 8vh; */
  /* ${(props) => props.isMobile && 'margin: 6vh 0 8vh;'}; */
`;

////////////////////////////////////////////////////////////////////////////////////

const ArrowDown = ({ text_color, bg_color }) => {
  return (
    <StyledDownArrow
      text_color={text_color}
      bg_color={bg_color}
      // initial={{ scale: 0, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ ease: 'easeOut', duration: 0.3, delay: 0.5 }}
    >
      <motion.p
        animate={{
          opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
          y: [-15, 0, 0, 0, 0, 0, 0, 0, 15],
        }}
        transition={{ ease: 'easeInOut', duration: 2.5, repeat: Infinity }}
      >
        ↓
      </motion.p>
    </StyledDownArrow>
  );
};

export default ArrowDown;
