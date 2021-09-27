import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

////////////////////////////////////////////////////////////////////////////////////

const BlocImage = ({ number }) => {
  return (
    <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
        <motion.img
          ref={ref}
          animate={{
            opacity: inView ? 1 : 0,
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
          }}
          className='bloc-image'
          src={`/jpg/head-${number}.jpg`}
          alt={`head kintsugi ${number}`}
        />
      )}
    </InView>
  );
};

const ManifesteMobile = () => {
  return (
    <InView threshold={0.1}>
      {({ inView, ref, entry }) => (
        <StyledSectionMobile
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
        >
          <motion.div
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
              />
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
              <BlocImage number={1} />

              <p>
                Tel un objet symbolique au cœur d'un monde fragmenté, les
                marques écartelées par les transformations du monde sont
                confrontées à des ruptures de sens qui risquent de les briser.
              </p>
            </div>

            <div className='bloc'>
              <BlocImage number={2} />

              <p>
                S'inspirant de cette tradition, nous nous engageons à les
                reconsidérer dans leur globalité pour identifier la faille qui
                va devenir la ligne de force.
              </p>
            </div>

            <div className='bloc'>
              <BlocImage number={3} />

              <p>
                L'agence LET'S BE* explore l'essence de la marque en décomposant
                la manière dont les publics donnent du sens à leurs expériences
                pour refonder la plateforme de marque.
              </p>
              <em>
                *LET'S BE : agence en stratégie de marque, partenaire de
                l'agence KINTSUGI
              </em>
            </div>

            <p>
              L'agence KINTSUGI déploie l'univers de la marque, de l'identité
              aux outils de communication.
            </p>

            <div ref={ref} className='bloc'>
              <BlocImage number={4} />

              <p>
                Réparée à l'or,
                <br /> la marque fidèle à son essence, renouvelée dans son
                existence surprend dès lors ses publics par son audace et sa
                capacité à ouvrir des nouvelles voies.
              </p>
            </div>
          </motion.div>
        </StyledSectionMobile>
      )}
    </InView>
  );
};

/////////////////////////// styled components /////////////////////////////////////

const StyledSectionMobile = styled(motion.section)`
  position: relative;
  padding: 5rem 10vw 10rem;
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
        width: max(20vw, 16rem);
      }
    }
    & p {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: lighter;
      text-transform: uppercase;
      line-height: 2;
      color: #d5d5d5;
      margin: 2rem 0;
      font-size: max(1.2vw, 0.8rem);
      text-align: center;
      letter-spacing: 0.15rem;
    }
    & em {
      text-transform: none;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: #808080;
      font-style: italic;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.6;
    }
    & .bloc {
      position: relative;
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  & .bloc-image {
    width: 100%;
  }
`;

export default ManifesteMobile;
