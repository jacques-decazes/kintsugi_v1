import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//________ Components ________
import PreviewAlert from './previewAlert';
import { Header, Footer } from 'components';

/////////////////////////// styled components /////////////////////////////////////

const ContentContainer = styled(motion.main)``;

///////////////////////////////////////////////////////////////////////////////////

const DefaultLayout = ({ children, preview, doc }) => {
  return (
    <>
      {preview && <PreviewAlert preview={preview} />}
      <Header />
      <ContentContainer>{children}</ContentContainer>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
