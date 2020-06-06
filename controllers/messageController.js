const { Message } = require('../models');

module.exports = {
  sendMessage: async (req, res) => {
    const { message } = req.body;
    const { eventId } = req.params;

    if (!message) {
      return res.status(400).json({ error: 'You must provide a message' });
    }
    try {
      const newMessage = await new Message({
        message,
        user: req.user._id,
        event: eventId,
      }).save();
      req.user.messages.push(message);
      // req.user.events.messages.push(newMessage);
      await req.user.save();
      const sentMessage = await Message.find({ event: eventId }).populate(
        'user',
      );
      return res.status(200).json(sentMessage);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllMessages: async (req, res) => {
    const { id } = req.params;
    try {
      const sentMessages = await Message.find({ event: id }).populate('user');
      return res.status(200).json(sentMessages);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },


}