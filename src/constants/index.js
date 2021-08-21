const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'dw2i2kvg',
  dataset: 'production',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
