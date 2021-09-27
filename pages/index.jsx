import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';

import { NextSeo } from 'next-seo';
import styled from 'styled-components';

//________ Utils ________
import { Client } from 'utils/prismicHelpers';
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

const HomePage = ({ doc, preview }) => {
  const { isMobile } = useDeviceDetect();

  console.log(isMobile);
  if (doc && doc.data) {
    return (
      <>
        <NextSeo
          title='Accueil'
          description='Branding, storytelling, advertising. The best agency to support small and medium-sized companies'
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
  }

  // Call the standard error page if the document was not found
  return null;
};

export async function getStaticProps({
  preview = null,
  previewData = {},
  res,
}) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};

  // res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  return {
    props: {
      doc,
      preview,
    },
  };
}

export default HomePage;
