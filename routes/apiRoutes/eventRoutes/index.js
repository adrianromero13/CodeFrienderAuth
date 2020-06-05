const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent, getEvent } = require('../../../controllers/eventController')

// has /api/events prepended to everything

router.route('/')
  .get(requireAuth, getEvent)
  .post(requireAuth, createEvent);

// router.post('/join', requireAuth, joinEvent);

// router.delete('/delete/:eventId', requireAuth, deleteEvent);
// router.get('/eventSelected/:eventId', requireAuth, specificEvent)


// router.put('/title/:eventId', requireAuth, updateTitle);
// router.put('/description/:eventId', requireAuth, updateDescription);

module.exports = router;
