const router = require('express').Router();
const { requireAuth } = require('./../../../middlewares/authMiddlewares');
const { getUsers, getMatches, getAllUserEmails } = require('./../../../controllers/userController');


// '/api/ucbxusers' prepended to every route.
router.route('/')
  .get(getUsers);

router.route('/matches') // collaborate
  .get(requireAuth, getMatches);

router.get('/emails', getAllUserEmails);

module.exports = router;