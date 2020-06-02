const router = require('express').Router();

const dbController = require('./../../../controllers/dbController');


//'/api/ucbxusers' prepended to every route.
router.route('/')
  .get(dbController.getUser)
  .postMessage(dbController.insertUser);

router.route('/bestmatches') //collaborate
  .post(dbController.getBestMatches);

router.route('/matchesforthem') //mentor
  .post(dbController.getMatchesForThem);

router.route('/matchesforme') //apprentice
  .post(dbController.getMatchesForMe);

module.exports = router;