import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import LogoKintsugiSmall from 'assets/svg/logo-kintsugi-small.js';
import { Mail } from 'assets/svg/social-icons.js';

///////////////////////////////////////////////////////////////////////////////////

const HeaderMobile = () => {
  const { height } = useWindowSize();
  const { width } = useWindowSize();

  const [showHeader, setShowHeader] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -(height / 3)) {
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
      <AnchorLink href='#home'>
        <LogoKintsugiSmall />
      </AnchorLink>

      <span>|</span>

      <nav>
        <ul>
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
        </ul>
      </nav>
    </StyledHeader>
  );
};

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
  background-color: #111212;
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7); */
  @media (max-width: 768px) {
    justify-content: space-between;
    display: none;
  }
  & svg {
    width: 8rem;
    margin-right: 2rem;
    @media (max-width: 768px) {
      width: 7rem;
      margin-right: 0rem;
    }
  }
  & span {
    color: #54575b;
    padding: 0rem 1.2rem 0.1rem;
    display: block;
    margin-right: 2rem;
    @media (max-width: 768px) {
      display: none;
    }
  }

  & nav {
    @media (max-width: 768px) {
      display: none;
    }
    & ul {
      display: flex;
      margin-top: 0.4rem;

      & li {
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 400;
        letter-spacing: 0.5rem;
        font-size: 0.7rem;
        padding-bottom: 0.4rem;
        margin-right: 2rem;
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

export default HeaderMobile;
