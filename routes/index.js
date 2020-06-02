const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

router.use('/', (req, res) => {
  res.send('Home');
});

module.exports = router;
