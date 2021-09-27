import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import { Mail, Pin } from 'assets/svg/social-icons.js';
import ContactTitle from 'assets/svg/contact-title.js';
import Virgule from 'assets/svg/kintsugi-virgule.js';

////////////////////////////////////////////////////////////////////////////////////

const Contact = () => {
  const { height } = useWindowSize();

  return (
    <StyledSection data-scroll-section>
      <motion.div
        id='contact'
        className='contact'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
      >
        <div className='contact-virgule'>
          <img src='/png/virgule.png' alt='virgule kintsugi' />
        </div>

        {/* <div className='contact-title'>
          <ContactTitle />
        </div> */}

        <motion.div className='contact-mail'>
          <a
            href='mailto:contact@agencekintsugi.fr'
            target='_blank'
            rel='noreferrer'
          >
            contact@agencekintsugi.fr
          </a>
        </motion.div>
      </motion.div>
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 10vw 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0vh 10vw 10rem;
  }

  & .contact {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &-virgule {
      & img {
        width: 1.5rem;
      }
    }

    &-title {
      margin: 2rem 0;
      @media (min-width: 768px) {
        display: none;
      }
      & svg {
        width: max(14vw, 14rem);
      }
    }
    &-mail {
      margin-top: 4rem;
      & a {
        cursor: pointer;
        font-weight: 400;
        color: #a5a5a5;
        letter-spacing: 0.5rem;
        font-size: 1rem;
        padding-bottom: 0.8rem;
        background: linear-gradient(
            90deg,
            transparent calc(100% / 4),
            rgba(205, 165, 41, 0.8) 0 calc(300% / 4),
            transparent 0
          )
          var(--d, 100%) 100% /200% 1px repeat-x;
        transition: 0.5s;
        & :hover {
          color: #ffffff;
          --d: -100%;
        }
      }
    }
  }
`;

export default Contact;