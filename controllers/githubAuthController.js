/* eslint-disable camelcase */
const fetch = require('node-fetch');
const { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } = require('../config');

async function getAccessToken(code) {
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await res.text();
  const params = new URLSearchParams(data);
  return params.get('access_token');

}

async function getGithubUserToken (access_token) {
  const req = fetch('https://api.githuv.com/user', {});
}

module.exports = {

  getGithubUser: async (req, res) => {
    const reDirect_URI = 'http://localhost:3001/login/github'; // must match Authorization callback URL on github settings
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${reDirect_URI}`,
    );
  },

  getToken: async (req, res) => {
    const { code } = req.query;
    const token = await getAccessToken(code);
    res.json({ token });
  },

};
