import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import LogoDreamOn from 'assets/svg/logo-dream-on.js';
import { Mail, Pin } from 'assets/svg/social-icons.js';

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 10vw 0vh;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    height: 70vh;
  }

  & h1 {
    clip-path: inset(0% 0% 0% 0%) !important;
    margin-bottom: 0.8rem;
    margin-top: 10vh;
    & svg {
      max-width: 17rem;
      width: 17vw;
      min-width: 12rem;
      fill: #90ec5d;
    }
  }
  & h2 {
    clip-path: inset(0% 0% 0% 0%) !important;
    cursor: pointer;
    &:hover > div > a  {
      transform: translateX(0);
      transition: 0.25s ease-out;
    }
    &:hover > div > svg  {
      transform: translateY(0.6rem);
      transition: 0.2s ease-in 0.1s;
      opacity: 1;
    }
    & div {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      letter-spacing: 0.08rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      @media (max-width: 688px) {
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
        :not(:first-child) {
          margin-top: 1.8rem;
        }
      }
      & a {
        transform: translateX(-2rem);
        transition: 0.25s ease-in;
        @media (max-width: 688px) {
          transform: translateX(0);
        }
      }

      & svg {
        width: 1.7rem;
        fill: #90ec5d;
        transform: translateY(2rem);
        margin-right: 0.5rem;
        transition: 0.2s ease-out;
        display: block;
        opacity: 0;
        @media (max-width: 688px) {
          display: none;
        }
      }
      & span {
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: #54575b;
        font-size: 1.1rem;
        font-weight: 600;
        margin-right: 0.5rem;
        @media (max-width: 688px) {
          margin-right: 0;
          margin-bottom: 0.3rem;
          align-items: center;
        }
      }
    }
  }
  & h3 {
    clip-path: inset(0% 0% 0% 0%) !important;

    & div {
      margin-top: 1.6rem;
      font-size: 1.6rem;
      letter-spacing: 0.08rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      @media (max-width: 688px) {
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
        margin-top: 1.2rem;
      }
    }
    & span {
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: #54575b;
      font-size: 1.1rem;
      font-weight: 600;
      margin-right: 0.5rem;
      @media (max-width: 688px) {
        margin-right: 0;
        margin-bottom: 0.3rem;
        align-items: center;
      }
    }
  }
`;

////////////////////////////////////////////////////////////////////////////////////

const InfosBanner = () => {
  const { height } = useWindowSize();
  const [showInfos, setShowInfos] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -(height / 2.5)) {
      setShowInfos(false);
    } else {
      setShowInfos(true);
    }
  });
  return (
    <StyledSection
      initial={false}
      animate={showInfos ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1.1 }}
    >
      <h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}
        >
          <LogoDreamOn />
        </motion.div>
      </h1>

      <h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.4 }}
        >
          <span>NEW ADRESS:</span>
          <Pin />
          <a
            href='https://www.google.fr/maps/place/18+Rue+Oberkampf,+75011+Paris/@48.863301,2.367132,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66dfda77b6c11:0x412795f164c593c!8m2!3d48.8632975!4d2.3693207'
            target='_blank'
            rel='noreferrer'
          >
            18 rue Oberkampf 75011 Paris
          </a>
        </motion.div>
      </h2>
      <h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
        >
          <span>CONTACT:</span>
          <Mail />
          <a href='mailto:contact@dream-on.fr' target='_blank' rel='noreferrer'>
            contact@dream-on.fr
          </a>
        </motion.div>
      </h2>
      <h3>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.6 }}
        >
          <span>NEW WEBSITE:</span>
          <p>soon</p>
        </motion.div>
      </h3>
    </StyledSection>
  );
};
export default InfosBanner;
