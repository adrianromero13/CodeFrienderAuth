const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { createEvent, getEvent, deleteEvent, specificEvent, updateTitle, updateDescription, updateLocation, joinEvent } = require('../../../controllers/eventController')

// has /api/events prepended to everything

router.route('/')
  .get(requireAuth, getEvent)
  .post(requireAuth, createEvent);
router.delete('/delete/:eventId', requireAuth, deleteEvent);
router.get('/eventselected/:eventId', requireAuth, specificEvent);
router.put('/title/:eventId', requireAuth, updateTitle);
router.put('/description/:eventId', requireAuth, updateDescription);
router.put('/location/:eventId', requireAuth, updateLocation);
router.post('/join', requireAuth, joinEvent);
module.exports = router;
