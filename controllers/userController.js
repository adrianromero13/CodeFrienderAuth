const { User } = require('../models/index');

module.exports = {

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getCurrentUser: async (req, res) => {
    try {
      const userData = await User.find({ currentUser: req.user._id });
      return res.json(userData);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getMatches: async (req, res) => {
    // we need too grab current user to be able to match
    try {
      const { strength, weakness } = req.user;
      const best = await User.find({ strength: weakness, weakness: strength });
      const forThem = await User.find({ weakness: strength });
      const forMe = await User.find({ strength: weakness });
      const matches = { best, forThem, forMe };
      return res.status(200).json(matches);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAllUserGitHub: async (req, res) => {
    try {
      const userGitHub = await User.findOne({ github: req.query.github }, 'github');
      return res.status(200).json(userGitHub);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
