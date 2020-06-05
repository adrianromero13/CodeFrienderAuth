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
    const {
      title,
      date,
      time,
      location,
      description,
      pin,

    } = req.body;
    if (!pin) {
      return res
        .status(400)
        .json({ error: "You must input a pin!" });
    }
    try {
      const existingPin = await Event.findOne({
        pin,
        userName: req.user.userName,
      });
      if (existingPin) {
        return res.status(403).json({ error: "pin already in use, please provide a different pin" });
      }

      const newEvent = await new Event({
        title,
        date,
        time,
        location,
        description,
        pin,
        host: req.user._id,
        userName: req.user.userName,
      }).save();

      const newEventId = newEvent._id;

      // pushing the userID into the attending field
      const updateAttending = await Event.findByIdAndUpdate(newEventId, {
        $push: { attending: req.user._id },
      });
      return res.status(200).json(updateAttending);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
