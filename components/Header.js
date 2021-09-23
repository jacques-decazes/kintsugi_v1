import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styled from 'styled-components';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import LogoDreamOn from 'assets/svg/logo-dream-on.js';
import { Mail } from 'assets/svg/social-icons.js';

/////////////////////////// styled components /////////////////////////////////////

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 99999;
  padding: 1rem 2rem;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191b19;
  @media (max-width: 688px) {
    justify-content: space-between;
  }
  & svg {
    width: 8rem;
    fill: #90ec5d;
    margin-right: 1rem;
    @media (max-width: 688px) {
      width: 7rem;
    }
  }
  & span {
    color: #54575b;
    padding: 0rem 1.2rem 0.1rem;
    display: block;
    @media (max-width: 688px) {
      display: none;
    }
  }
  & a {
    clip-path: inset(0% 0% 0% 0%) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    &:hover > p  {
      transform: translateY(-2rem);
      transition: 0.25s ease-out;
      opacity: 1;
    }
    &:hover > svg  {
      transform: translateY(0.2rem);
      transition: 0.2s ease-in 0.1s;
      opacity: 1;
    }
    & svg {
      position: absolute;
      transform: translateY(2rem);
      transition: 0.2s ease-out;
      width: 1.7rem;
      opacity: 0;
      margin-right: 0rem;
      fill: #90ec5d;
    }
    & p {
      transform: translateY(0rem);
      transition: 0.2s ease-in;
      font-size: 0.9rem;
      opacity: 1;
      letter-spacing: 0.08rem;

      cursor: pointer;

      @media (max-width: 688px) {
        font-size: 0.8rem;
        color: #191b19;
        background-color: #90ec5d;
        padding: 0.43rem 1rem 0.5rem;
        border-radius: 1rem;
      }
    }
  }
`;

///////////////////////////////////////////////////////////////////////////////////

const Header = () => {
  const { height } = useWindowSize();
  const { width } = useWindowSize();

  const [showHeader, setShowHeader] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -(height / 2)) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  });
  return (
    <StyledHeader
      initial={false}
      animate={showHeader ? { y: 0 } : { y: -60 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <LogoDreamOn />
      <span>|</span>
      <a href='mailto:contact@dream-on.fr' target='_blank' rel='noreferrer'>
        <Mail />
        <p>{width <= 688 ? 'contact' : 'contact@dream-on.fr'}</p>
      </a>
    </StyledHeader>
  );
};

export default Header;
