const axios = require('axios');
const { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } = require('./../config');


module.exports = {

  getGithubUser: async (req,res) => {
    const redirect_uri = 'http://localhost:3001/login/github/callback' //must match Authorization callback URL on github settings
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
    );
  }

}