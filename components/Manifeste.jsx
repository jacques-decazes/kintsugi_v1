import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
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
  return (
    <InView threshold={0.1}>
      {({ inView, ref, entry }) => (
        <StyledSection
          data-scroll-section
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
        >
          <motion.div
            id='manifesto'
            className='text'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
          >
            <div className='text-virgule'>
              <img src='/png/virgule.png' alt='virgule kintsugi' />
            </div>
            <div className='text-title'>
              <img
                src='/png/manifeste-title.png'
                alt='manifeste title kintsugi'
              />{' '}
            </div>

            <p>
              KINTSUGI. Le génie de cette tradition japonaise consiste à réparer
              à l'or les fêlures de la céramique pour en faire un objet dont la
              beauté vient de la mise en évidence des traces de l'histoire.
            </p>

            <div
              transition={{ ease: 'easeInOut', duration: 0.7 }}
              className='bloc'
            >
              <img
                src='/png/virgule.png'
                alt='virgule'
                className='bloc-virgule-left'
                data-scroll
                data-scroll-speed={4}
              />
              <img
                className='bloc-img'
                src='/jpg/head-1.jpg'
                alt='head kintsugi 1'
                data-scroll
                data-scroll-speed={1}
              />
              <p className='bloc-text-left' data-scroll data-scroll-speed={0}>
                Tel un objet symbolique au cœur d'un monde fragmenté, les
                marques écartelées par les transformations du monde sont
                confrontées à des ruptures de sens qui risquent de les briser.
              </p>
            </div>

            <div className='bloc'>
              <p className='bloc-text-right' data-scroll data-scroll-speed={0}>
                S'inspirant de cette tradition, nous nous engageons à les
                reconsidérer dans leur globalité pour identifier la faille qui
                va devenir la ligne de force.
              </p>
              <img
                className='bloc-img'
                src='/jpg/head-2.jpg'
                alt='head kintsugi 2'
                data-scroll
                data-scroll-speed={1}
              />
              <img
                src='/png/virgule.png'
                alt='virgule'
                className='bloc-virgule-right'
                data-scroll
                data-scroll-speed={4}
              />
            </div>

            <div className='bloc'>
              <img
                className='bloc-img'
                src='/jpg/head-3.jpg'
                alt='head kintsugi 3'
                data-scroll
                data-scroll-speed={1}
              />
              <img
                src='/png/virgule.png'
                alt='virgule'
                className='bloc-virgule-left'
                data-scroll
                data-scroll-speed={4}
              />
              <p className='bloc-text-left' data-scroll data-scroll-speed={0}>
                L'agence LET'S BE* explore l'essence de la marque en décomposant
                la manière dont les publics donnent du sens à leurs expériences
                pour refonder la plateforme de marque. <br />
                <br />
                <em>
                  *LET'S BE : agence en stratégie de marque, partenaire de
                  l'agence KINTSUGI
                </em>
              </p>
            </div>

            <p>
              L'agence KINTSUGI déploie l'univers de la marque, de l'identité
              aux outils de communication.
            </p>

            <div ref={ref} className='bloc'>
              <img
                className='bloc-img-big'
                src='/jpg/head-4.jpg'
                alt='head kintsugi 4'
                data-scroll
                data-scroll-speed={1}
              />
              <img
                src='/png/virgule.png'
                alt='virgule'
                className='bloc-virgule-left-big'
                data-scroll
                data-scroll-speed={4}
              />
              <p className='bloc-text-left-small'>
                Réparée à l'or,
                <br /> la marque fidèle à son essence, renouvelée dans son
                existence surprend dès lors ses publics par son audace et sa
                capacité à ouvrir des nouvelles voies.
              </p>
            </div>

            <div className='text-virgule'>
              <Virgule />
            </div>
          </motion.div>
        </StyledSection>
      )}
    </InView>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled(motion.section)`
  position: relative;
  padding: 5rem 20vw 10rem;
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
  }

  & .text {
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
      & img {
        width: max(20vw, 20rem);
      }
    }
    & p {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: lighter;
      text-transform: uppercase;
      line-height: 2;
      color: #d5d5d5;
      margin: 2rem 0;
      font-size: max(1.2vw, 1rem);
      text-align: center;
    }
    & .bloc {
      position: relative;
      margin: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &-text-left {
        width: 60%;
        text-align: left;
        margin-left: 2rem;
        & em {
          text-transform: none;
          font-family: Georgia, 'Times New Roman', Times, serif;
          color: #808080;
          font-style: italic;
          font-size: 0.8rem;
          text-align: center;
        }
      }
      &-text-left-small {
        width: 40%;
        text-align: left;
        margin-left: 2rem;
      }
      &-text-right {
        width: 60%;
        text-align: right;
        margin-right: 2rem;
      }
      &-img {
        width: 40%;
      }
      &-virgule-left {
        position: absolute;
        bottom: 8rem;
        left: -2rem;
        z-index: 9;
        width: 3rem;
        &-big {
          position: absolute;
          width: 5rem;
          left: -3rem;
        }
      }

      &-virgule-right {
        position: absolute;
        bottom: 8rem;
        right: -2rem;
        z-index: 9;
        width: 3.5rem;
      }
      &-img-big {
        overflow: hidden;
        width: 60%;
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
  }
`;

export default Manifeste;
