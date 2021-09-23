// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://agence-dream-on.cdn.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  'MC5YOU9mSEJJQUFDUUFtaWZt.77-977-977-9DR5c77-977-9Vifvv71bAj3vv73vv71K77-977-9HG4RGg7vv70mA--_ve-_vSDvv73vv70';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'work') {
    return `/work/${doc.uid}`;
  }
  if (doc.type === 'media') {
    return `/medias/${doc.uid}`;
  }
  return '/';
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'work') {
    return `/work/${doc.uid}`;
  }
  if (doc.type === 'media') {
    return `/medias/${doc.uid}`;
  }
  return '/';
};
