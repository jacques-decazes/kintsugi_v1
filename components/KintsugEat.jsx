import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import ManifesteText from 'assets/svg/manifeste-text.js';
import KintsugEatTitle from 'assets/svg/kintsugeat-title.js';
import Virgule from 'assets/svg/kintsugi-virgule.js';

////////////////////////////////////////////////////////////////////////////////////

const KintsugEat = () => {
  const { height } = useWindowSize();

  return (
    <StyledSection>
      <motion.div
        id='vernissage'
        className='text'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
      >
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <div className='text-virgule'>
            <Virgule />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <div className='text-title'>
            <KintsugEatTitle />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            C'est la rencontre <br /> d'un alchimiste du chocolat <br />
            et d'un designer de marque.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            Ils s'inspirent
            <br /> d'une tradition japonaise
            <br /> qui consiste à réparer à l'or
            <br /> et à proposer
            <br /> une nouvelle beauté de l'objet.
            <br /> Une métaphore de la résilience.
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn='slideIn' offset={60} duration={1.1}>
          <div className='text-virgule'>
            <Virgule />
          </div>
        </ScrollAnimation> */}
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

  & .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &-virgule {
      & svg {
        width: 0.8rem;
        fill: #cda529;
      }
    }

    &-title {
      margin: 2rem 0;
      & svg {
        width: max(18vw, 18rem);
      }
    }
    & p {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      line-height: 2;
      color: #616161;
      margin-bottom: 2rem;
      font-size: max(1.6vw, 1.1rem);
      text-align: center;
    }
    & em {
      font-family: Georgia, 'Times New Roman', Times, serif;
      line-height: 1.4;
      color: #616161;
      margin-top: 2rem;
      font-style: italic;
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export default KintsugEat;
