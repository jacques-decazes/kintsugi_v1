import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//________ Components ________

/////////////////////////// styled components /////////////////////////////////////

const StyledSection = styled.section`
  position: relative;
  padding: 15vh 10vw 40vh;
  width: 100%;
  & h1 {
    font-size: 12vw;
    text-align: left;
    text-transform: uppercase;
    line-height: 0.85;
    font-weight: 900;
  }
  & p {
    padding: 2rem 0 1.5rem;
    font-size: 1rem;
    font-weight: 200;
  }
  & span {
    font-size: 2rem;
  }
`;

////////////////////////////////////////////////////////////////////////////////////

const Work = ({ content }) => {
  return (
    <StyledSection>
      <h1>{content.data.work_title}</h1>
      <p>{content.data.work_description}</p>
      <span role='img'>⚓</span>

      <LazyLoadImage
        src={`${content.data.work_thumbnail.url}?auto=format%2Ccompress&fit=max&q=10&w=800`}
        // effect='black-and-white'
        style={{
          width: '80vw',
          height: '50vw',
          objectFit: 'cover',
        }}
        alt={content.data.work_thumbnail.alt}
      />
      <span role='img'>⚓</span>

      <div>lkshfdshfksdhkdsh</div>
      {content.data.text && <p>{content.data.text}</p>}
    </StyledSection>
  );
};
export default Work;
