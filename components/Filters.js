import React from 'react';
import { default as NextLink } from 'next/link';
import styled from 'styled-components';

/////////////////////////// styled components /////////////////////////////////////
const StyledSection = styled.section`
  position: relative;
  padding: 20vh 10vw 0;
  width: 100%;
  & ul {
    background-color: rgb(29, 29, 29);
    padding: 1rem;
    display: flex;
    justify-content: center;
    & li {
      color: white;
      text-transform: uppercase;
      font-size: 1.8vmax;
      font-weight: 700;
      display: inline;
      &:not(:last-child) {
        margin-right: 2rem;
        & p::after {
          content: '|';
          font-weight: 200;
          margin-left: 2rem;
        }
      }
    }
  }
`;

///////////////////////////////////////////////////////////////////////////////////

const Filters = ({ medias }) => {
  return (
    <StyledSection>
      <ul>
        {medias.map((item) => (
          <li key={item.id}>
            {/* <ScrollAnimation
            animateIn="slideIn"
            duration={1}
            delay={100}
            animateOnce
          > */}
            <NextLink
              href={`/medias/[uid]`}
              as={`/medias/${item.uid}`}
              scroll={false}
              passHref
            >
              <a>
                <p>{item.data.media_name}</p>
              </a>
            </NextLink>

            {/* </ScrollAnimation> */}
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default Filters;
