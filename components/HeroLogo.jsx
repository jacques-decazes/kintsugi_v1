import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { use100vh } from 'react-div-100vh';
import { InView } from 'react-intersection-observer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import LogoKintsugiSmall from 'assets/svg/logo-kintsugi-small.js';
import LogoAgenceText from 'assets/svg/logo-agence-text.js';
import LogoParisText from 'assets/svg/logo-paris-text.js';

import LogoKintsugi from 'assets/svg/logo-kintsugi.js';

import { Mail, Pin } from 'assets/svg/social-icons.js';

////////////////////////////////////////////////////////////////////////////////////

const HeroLogo = () => {
  const height = use100vh();

  return (
    <StyledSection id='home' height={height} data-scroll-section>
      <InView threshold={0.5}>
        {({ inView, ref, entry }) => (
          <motion.div
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
            className='bloc-logo'
            ref={ref}
          >
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0 }}
              className='head'
              src='/png/head_dore.png'
              alt='kintsugi head'
            />
            <div className='agence'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
              >
                <LogoAgenceText />
              </motion.div>
            </div>
            <div className='kintsugi'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
              >
                <img src='/png/logo-kintsugi.png' alt='logo kintsugi' />
              </motion.div>
            </div>
            <div className='paris'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
              >
                <LogoParisText />
              </motion.div>
            </div>
          </motion.div>
        )}
      </InView>

      {/* 
      <nav>
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 1 }}
        >
          <li>
            <AnchorLink offset='100' href='#manifesto'>
              Manifeste
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset='100' href='#vernissage'>
              Vernissage
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset='100' href='#contact'>
              Contact
            </AnchorLink>
          </li>
        </motion.ul>
      </nav> */}
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 5rem 10vw;
  height: ${(props) => `${props.height}px`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .bloc-logo {
    margin-top: -5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .head {
      width: 10vw;
      max-width: 7rem;
      min-width: 4rem;
      margin-bottom: min(3rem, 4vw);
    }
    & .agence {
      clip-path: inset(0% 0% 0% 0%) !important;
      & svg {
        width: 15vw;
        max-width: 10rem;
        min-width: 6.5rem;
        fill: #ffffff;
      }
    }
    & .kintsugi {
      clip-path: inset(0% 0% 0% 0%) !important;
      margin-bottom: min(4rem, 10vw);
      margin-top: min(1rem, 3vw);
      & img {
        max-width: 30rem;
        width: 50vw;
        min-width: 18rem;
      }
    }
    & .paris {
      clip-path: inset(0% 0% 0% 0%) !important;
      & svg {
        width: 11vw;
        max-width: 7rem;
        min-width: 5rem;
        fill: #ffffff;
      }
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
      margin-top: 5rem;
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
