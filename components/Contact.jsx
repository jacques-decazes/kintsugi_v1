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

        <div className='contact-title'>
          <ContactTitle />
        </div>

        <div className='contact-bloc'>
          <div className='contact-bloc-infos'>
            <p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
              >
                <Mail />
                <a
                  href='mailto:contact@agencekintsugi.fr'
                  target='_blank'
                  rel='noreferrer'
                >
                  contact@agencekintsugi.fr
                </a>
              </motion.div>
            </p>
          </div>
        </div>
      </motion.div>
    </StyledSection>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 0vh 10vw 25rem;
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
    &-bloc {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-left: -5rem;
      @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0rem;
      }
      & img {
        width: 20%;
        margin-right: 5rem;
        @media (max-width: 768px) {
          order: 2;
          width: 40%;
          margin-right: 0rem;
          margin-top: 3rem;
        }
      }
      &-infos {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        @media (max-width: 768px) {
          align-items: center;
          margin-top: 0rem;
        }
        & p {
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
            font-size: 1rem;
            letter-spacing: 0.08rem;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            @media (max-width: 768px) {
              flex-direction: column;
              align-items: center;
              font-size: 1.3rem;
              :not(:first-child) {
                margin-top: 1.8rem;
              }
            }
            & a {
              letter-spacing: 0.5rem;
              transform: translateX(-2rem);
              transition: 0.25s ease-in;
              @media (max-width: 768px) {
                transform: translateX(0);
                font-size: 1rem;
                letter-spacing: 0.1rem;
                background-color: #cda529;
                color: #111212;
                padding: 1rem 2rem;
                border-radius: 2rem;
                font-weight: 400;
              }
            }

            & svg {
              width: 1.7rem;
              fill: #cda529;
              transform: translateY(2rem);
              margin-right: 0.5rem;
              transition: 0.2s ease-out;
              display: block;
              opacity: 0;
              @media (max-width: 768px) {
                display: none;
              }
            }
            & span {
              font-family: Georgia, 'Times New Roman', Times, serif;
              color: #54575b;
              font-size: 1.1rem;
              font-weight: 600;
              margin-right: 0.5rem;
              @media (max-width: 768px) {
                margin-right: 0;
                margin-bottom: 0.3rem;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }
`;

export default Contact;
