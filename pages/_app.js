import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';

//________ SEO config ________
import SEO from 'next-seo.config';

//________ Styles ________
import 'styles/global.scss';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
};

export default App;
