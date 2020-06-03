const router = require('express').Router();

const githubLogin = require('./githubLogin');


// '/login' prepended
router.use('/github', githubLogin);

module.exports = router;
