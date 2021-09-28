import React, { useEffect } from 'react';

import { NextSeo } from 'next-seo';

//________ Utils ________
import useDeviceDetect from 'utils/useDeviceDetect';

//________ Components + Layout  ________
import DefaultLayout from 'layouts';
import {
  HeroLogo,
  Manifeste,
  ManifesteMobile,
  Contact,
  ContactMobile,
} from 'components';

///////////////////////////////////////////////////////////////////////////////////

const HomePage = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <NextSeo
        title='Accueil'
        description='Faire des lignes de faille des lignes de force. L’agence Kintsugi répare les marques. À l’or.
        Plateforme de marque, identité visuelle et supports de communication.'
      />
      <DefaultLayout>
        <HeroLogo />
        {!isMobile && <Manifeste />}
        {isMobile && <ManifesteMobile />}
        {!isMobile && <Contact />}
        {isMobile && <ContactMobile />}
      </DefaultLayout>
    </>
  );
};

export default HomePage;
