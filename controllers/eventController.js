const { User, Event } = require('../models/index');

module.exports = {
  getEvent: async (req, res) => {
    console.log(req.user.events);
    try {
      const events = await Event.find({ attending: req.user._id }, { events: req.user.events });

      return res.json(events);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  createEvent: async (req, res) => {
    console.log(req.user.events);
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
      req.user.events.push(newEvent);
      await req.user.save();
      return res.status(200).json(req.user);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
