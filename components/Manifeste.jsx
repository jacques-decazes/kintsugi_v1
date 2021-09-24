import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//________ Utils ________
import useWindowSize from 'utils/useWindowSize';

//________ Assets ________
import ManifesteText from 'assets/svg/manifeste-text.js';
import ManifesteTitle from 'assets/svg/manifeste-title.js';
import Virgule from 'assets/svg/kintsugi-virgule.js';

////////////////////////////////////////////////////////////////////////////////////

const Manifeste = () => {
  const { height } = useWindowSize();

  return (
    <StyledSection>
      <div className='images'>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ scale: 1.1, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ scale: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.5 }}
            src='/jpg/head-1.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ scale: 1.1, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ scale: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.5 }}
            src='/jpg/head-2.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ scale: 1.1, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ scale: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.5 }}
            src='/jpg/head-3.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.1 }}
          className='images-item'
        >
          <motion.img
            initial={{ scale: 1.1, y: 50, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ scale: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.5 }}
            src='/jpg/head-4.jpg'
            alt='head kintsugi 1'
          />
        </motion.div>
      </div>
      <motion.div
        id='manifesto'
        className='text'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
      >
        <div className='text-virgule'>
          <Virgule />
        </div>
        <div className='text-title'>
          <ManifesteTitle />
        </div>
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            KINTSUGI. Le génie de cette tradition japonaise consiste à réparer à
            l'or les fêlures de la céramique pour en faire un objet dont la
            beauté vient de la mise en évidence des traces de l'histoire.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            Tel un objet symbolique au cœur d'un monde fragmenté, les marques
            écartelées par les transformations du monde sont confrontées à des
            ruptures de sens qui risquent de les briser.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            S'inspirant de cette tradition, nous nous engageons à les
            reconsidérer dans leur globalité pour identifier la faille qui va
            devenir la ligne de force.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            L'agence LET'S BE* explore l'essence de la marque en décomposant la
            manière dont les publics donnent du sens à leurs expériences pour
            refonder la plateforme de marque.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            L'agence KINTSUGI déploie l'univers de la marque, de l'identité aux
            outils de communication.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='slideIn'
          offset={60}
          duration={1}
          animateOnce
        >
          <p>
            Réparée à l'or, la marque fidèle à son essence, renouvelée dans son
            existence surprend dès lors ses publics par son audace et sa
            capacité à ouvrir des nouvelles voies.
          </p>
        </ScrollAnimation>

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

        <em>
          *LET'S BE : agence en stratégie de marque, partenaire de l'agence
          KINTSUGI
        </em>
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

  & .images {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 4rem;

    &-item {
      overflow: hidden;
      width: 24%;
      margin-bottom: 2%;
      background-color: #cda529;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1024px) {
        width: 49%;
      }

      & img {
        width: 103%;
        height: 100%;
      }
    }
  }

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
      & svg {
        width: max(20vw, 20rem);
      }
    }
    & p {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      line-height: 2;
      color: #616161;
      margin-bottom: 2rem;
      font-size: max(1.2vw, 1rem);
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

export default Manifeste;
