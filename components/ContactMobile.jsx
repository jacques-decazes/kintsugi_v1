import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//_______ Assets________
import { Instagram } from 'assets/svg/social-icons.js';

////////////////////////////////////////////////////////////////////////////////////

const Contact = () => {
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

        <div className='contact-infos'>
          <a
            className='contact-infos-insta'
            href='https://www.instagram.com/agencekintsugi/'
            target='_blank'
            rel='noreferrer'
          >
            <Instagram />
          </a>
          <a
            className='contact-infos-mail'
            href='mailto:contact@agencekintsugi.fr'
            target='_blank'
            rel='noreferrer'
          >
            contact
          </a>
        </div>
      </motion.div>
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 10vw 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .contact {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &-virgule {
      & img {
        width: 1rem;
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
    &-infos {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &-insta {
        margin-right: 2.5rem;
        & svg {
          fill: #ffffff;
          width: 2rem;
          transition: 0.2s ease-in-out;
        }
        &:hover > svg {
          fill: #ffffff;
        }
      }
      &-mail {
        cursor: pointer;
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 0.5rem;
        font-size: 1.2rem;
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
