const router = require('express').Router();
const { sendMessage, getAllMessages } = require('../../../controllers/messageController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');


// 'api/messages' prepended
router.route('/')
  .get(requireAuth, getAllMessages)
  .post(requireAuth, sendMessage);

  

module.exports = router;
