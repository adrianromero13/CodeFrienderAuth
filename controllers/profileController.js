const { User } = require('../models/index');

module.exports = {

  getCurrentUser: async (req, res) => {
    try {
      const getUserData = await User.findById(req.user._id);
      return res.json(getUserData);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
