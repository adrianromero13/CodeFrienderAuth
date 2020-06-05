const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent, getEvent } = require('../../../controllers/eventController')

// has /api/events prepended to everything

router.route('/')
  .get(requireAuth, getEvent)
  .post(requireAuth, createEvent);


module.exports = router;
