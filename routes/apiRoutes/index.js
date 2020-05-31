const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');

const userRoutes = require('./userRoutes');

router.use('/todos', todoRoutes);
router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);

//declare '/api/ucbxusers
router.use('/ucbxusers', userRoutes);

module.exports = router;
