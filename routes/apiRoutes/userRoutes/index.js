const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const {
  getUsers,
  getMatches,
  // getAllMatches,
  getAllUserEmails,
  getAllUserGitHub,
} = require('../../../controllers/userController');
const { getCurrentUser } = require('../../../controllers/profileController');


// '/api/users' prepended to every route.
router.route('/')
  .get(getUsers);

router.route('/profile')
  .get(requireAuth, getCurrentUser);

// router.route('/:id')
//   .get(requireAuth, getCurrentUser);

router.route('/matches') // collaborate
  .get(requireAuth, getMatches);

// router.route('/allmatches')
//   .get(requireAuth, getAllMatches);

router.get('/emails', getAllUserEmails);
router.get('/github', getAllUserGitHub);

module.exports = router;
