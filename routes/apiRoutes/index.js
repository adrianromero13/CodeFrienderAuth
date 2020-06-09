const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
const eventRoutes = require('./eventRoutes');


// '/api' prepended
router.use('/auth', authRoutes);

// declare '/api/users
router.use('/users', userRoutes);

// declare '/api/messages
router.use('/messages', messageRoutes);


// declare 'api/events
router.use('/events', eventRoutes);

//declare '/api/eventspage route

module.exports = router;
