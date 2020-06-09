const router = require('express').Router();
const { signUp, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

// '/api/auth/ prepended
router.post('/signup', signUp);
router.post('/signin', requireSignIn, signIn);

module.exports = router;
