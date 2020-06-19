const { User } = require('../models/index');

module.exports = {

  getCurrentUser: async (req, res) => {
    try {
      const getUserData = await User.findById(req.user._id);
      return res.status(200).json(getUserData);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getFilteredUsers: async (req, res) => {
    try {
      const getOtherUsers = await User.find({ _id: { $ne: req.user._id } });
      return res.status(200).json(getOtherUsers);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
