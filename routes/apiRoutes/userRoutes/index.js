const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const {
  getUsers,
  getMatches,
  getAllUserEmails,
  getAllUserGitHub,
} = require('../../../controllers/userController');


// '/api/users' prepended to every route.
router.route('/')
  .get(getUsers);

router.route('/matches') // collaborate
  .get(requireAuth, getMatches);

router.get('/emails', getAllUserEmails);
router.get('/github', getAllUserGitHub);

module.exports = router;
