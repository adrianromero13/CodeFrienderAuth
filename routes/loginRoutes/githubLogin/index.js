const router = require('express').Router();

const { getGithubUser, getToken } = require('./../../../controllers/githubAuthController');

// '/login/github' prepended
router.route('/')
  .get(getGithubUser);

router.route('/callback')
  .get(getToken);

module.exports = router;