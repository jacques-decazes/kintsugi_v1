import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';
import {
  BrowserView,
  MobileView,
  isDesktop,
  isMobile,
} from 'react-device-detect';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

//________ Utils ________
import { Client } from 'utils/prismicHelpers';

//________ Components + Layout Desktop ________
import DesktopLayout from 'layouts/DesktopLayout';
import { HeroLogo, Manifeste, Contact } from 'components/Desktop';

//________ Components + Layout Mobile ________
import MobileLayout from 'layouts/MobileLayout';
import {
  HeroLogoMobile,
  ManifesteMobile,
  ContactMobile,
} from 'components/Mobile';

///////////////////////////////////////////////////////////////////////////////////

const HomePage = ({ doc, preview }) => {
  console.log(isDesktop);
  if (doc && doc.data) {
    return (
      <>
        <BrowserView renderWithFragment>
          <NextSeo
            title='Accueil'
            description='Branding, storytelling, advertising. The best agency to support small and medium-sized companies'
          />
          <DesktopLayout>
            <HeroLogo />
            <Manifeste />
            <Contact />
          </DesktopLayout>
        </BrowserView>

        <MobileView renderWithFragment>
          <NextSeo
            title='Accueil'
            description='Branding, storytelling, advertising. The best agency to support small and medium-sized companies'
          />
          <MobileLayout>
            <HeroLogoMobile />
            <ManifesteMobile />
            <ContactMobile />
          </MobileLayout>
        </MobileView>
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
