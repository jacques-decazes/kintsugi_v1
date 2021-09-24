import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import LogoKintsugiSmall from 'assets/svg/logo-kintsugi-small.js';
import LogoKintsugi from 'assets/svg/logo-kintsugi.js';

import { Mail, Pin } from 'assets/svg/social-icons.js';

////////////////////////////////////////////////////////////////////////////////////

const HeroLogo = () => {
  const { height } = useWindowSize();
  const [showInfos, setShowInfos] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -(height / 3.5)) {
      setShowInfos(false);
    } else {
      setShowInfos(true);
    }
  });
  return (
    <StyledSection
      id='home'
      initial={false}
      animate={showInfos ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1.1 }}
    >
      <p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
        >
          Agence
        </motion.div>
      </p>
      <h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
        >
          <LogoKintsugiSmall />
        </motion.div>
      </h1>
      <p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
        >
          Paris
        </motion.div>
      </p>
      {/* <h1>
        <LogoKintsugi />
      </h1> */}

      <nav>
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 1 }}
        >
          <li>
            <AnchorLink href='#manifeste'>Manifeste</AnchorLink>
          </li>
          <li>Vernissage</li>
          <li>Contact</li>
        </motion.ul>
      </nav>
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 10vh 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    clip-path: inset(0% 0% 0% 0%) !important;
    font-weight: 200;
    letter-spacing: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    @media (max-width: 650px) {
      font-size: 0.9rem;
      letter-spacing: 0.8rem;
    }
  }
  & h1 {
    clip-path: inset(0% 0% 0% 0%) !important;
    margin-bottom: 6vh;
    margin-top: 3vh;
    & svg {
      max-width: 30rem;
      width: 50vw;
      min-width: 12rem;
    }
  }
  & nav {
    width: 100%;
    @media (max-width: 880px) {
      display: none;
    }
    & ul {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 8vh;
      @media (max-width: 1024px) {
        justify-content: space-between;
      }
      & li {
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 200;
        letter-spacing: 1rem;
        font-size: 0.9rem;
        padding-bottom: 1rem;
        background: linear-gradient(
            90deg,
            transparent calc(100% / 4),
            rgba(205, 165, 41, 0.8) 0 calc(300% / 4),
            transparent 0
          )
          var(--d, 100%) 100% /200% 1px repeat-x;
        transition: 0.5s;
        & :hover {
          --d: -100%;
        }
      }
    }
  }
`;
export default HeroLogo;
