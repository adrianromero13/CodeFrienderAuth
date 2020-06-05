const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// const loginRoutes = require('./loginRoutes');


router.use('/api', apiRoutes);


module.exports = router;
