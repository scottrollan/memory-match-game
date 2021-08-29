const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'dw2i2kvg',
  dataset: 'production',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

let query = '*[_type == "winner"]| order(score desc)';

export const fetchTopTen = async () => {
  let qScore;
  let topTen = [];
  const winners = await Client.fetch(query);
  winners.sort((a, b) => {
    return b.score - a.score;
  });
  winners.forEach((w, i) => {
    if (i < 10) {
      //filter top ten scores
      topTen = [...topTen, { ...w }];
      if (i === 9) {
        qScore = w.score;
      }
    }
  });
  return { winners: topTen, qualifier: qScore };
};

export const sendNewWinner = async (winner) => {
  const res = await Client.create(winner);
  return res;
};
