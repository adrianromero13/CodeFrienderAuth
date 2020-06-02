const router = require('express').Router();
const authRoutes = require('./authRoutes');

const userRoutes = require('./userRoutes');


// '/api' prepended
router.use('/auth', authRoutes);

//declare '/api/users
router.use('/users', userRoutes);



module.exports = router;
