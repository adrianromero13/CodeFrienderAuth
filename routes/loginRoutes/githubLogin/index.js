const router = require('express').Router();

const { getGithubUser } = require('./../../../controllers/githubAuthController');

// '/login/github' prepended
router.route('/')
.get(getGithubUser)

router.route('/callback')
.get

module.exports = router;