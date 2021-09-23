import React from 'react';
import styled from 'styled-components';

/////////////////////////// styled components /////////////////////////////////////

const StyledDiv = styled.div`
  font-family: sans-serif;
  position: relative;
  z-index: 999999999;
  width: 100vw;
  padding: 0.7rem;
  background-color: #f7b042;
  color: rgb(255, 255, 255);
  text-align: center;

  & a {
    color: #8d5d16;
    padding: 0.3rem 0.9rem 0.35rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
    background-color: #fff3e1;
    cursor: pointer;
    & span {
      font-size: 1.3rem;
      vertical-align: middle;
    }
  }
`;

////////////////////////////////////////////////////////////////////////////////////

const PreviewAlert = ({ preview }) => {
  return (
    <StyledDiv>
      <>
        This page is a preview.
        <a href='/api/exit-preview'>
          <span role='img'>👉</span> click here
        </a>
        to exit preview mode.
      </>
    </StyledDiv>
  );
};

export default PreviewAlert;
