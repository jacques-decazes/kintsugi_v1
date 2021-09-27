import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled.section`
  position: relative;
  margin-bottom: 20vh;
  padding: 4vh 8vw 2vh;
  width: 100%;
  display: flex;
  justify-content: center;
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 5rem;
    column-gap: 3rem;
    max-width: 1300px;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
  & h2 {
    margin-top: 1.3rem;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12rem;
  }
  & h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: #a7aaa8;
    font-size: 1.1rem;
    margin-top: 0.4rem;
    line-height: 1.1;
  }
`;

////////////////////////////////////////////////////////////////////////////////////

const PicturesGridMobile = ({ content }) => {
  return (
    <StyledSection>
      <motion.ul
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.8 }}
      >
        {content.map((item) => (
          <li key={item.image.url}>
            <article>
              <ScrollAnimation animateIn='slideIn' offset={60} duration={1.1}>
                <LazyLoadImage
                  src={item.image.url}
                  // effect='black-and-white'
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  alt={`Dream On - ${item.image.alt}`}
                />

                <h2>{item.client}</h2>
                <h3>{item.category}</h3>
              </ScrollAnimation>
            </article>
          </li>
        ))}
      </motion.ul>
    </StyledSection>
  );
};

export default PicturesGridMobile;
