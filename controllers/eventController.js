const { User, Event } = require('../models/index');

module.exports = {
  getEvent: async (req, res) => {
    try {
      const events = await Event.find({ attending: req.user._id });

      return res.json(events);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  createEvent: async (req, res) => {
    const { title, description, date, pin } = req.body;
    if (!title || !description || !date || !pin) {
      return res
        .status(400)
        .json({ error: "You must input a title, description, date, and pin!" });
    }
    try {
      const existingPin = await Event.findOne({
        pin,
        userName: req.user.userName,
      });
      if (existingPin) {
        return res.status(403).json({ error: "You used this pin already" });
      }

      const newEvent = await new Event({
        title,
        description,
        date,
        pin,
        host: req.user._id,
        userName: req.user.userName,
      }).save();

      const newEventId = newEvent._id;

      // pushing the user's specific ID into the attending field
      const updateAttending = await Event.findByIdAndUpdate(newEventId, {
        $push: { attending: req.user._id },
      });
      return res.status(200).json(updateAttending);
    } catch (e) {
      return res.status(403).json({ e });
    }
    // they're creating a pin and creating an event name
  },
};