const { isEmail, isLength } = require('validator');
const jwt = require('jwt-simple');
const axios = require('axios');
const { User } = require('../models');
const { secret, GITHUB_CLIENT_SECRET } = require('../config');

function tokenForUser(user) {
  // 1st argument is the information we want to encode
  // 2nd argument is the secret we are going to use to encrypt it
  // By convention all json web tokens have a sub property
  // by sub we mean subject. As in who does this token belong to?
  // iat or issued at time is another convention by  jwt
  const timeStamp = new Date().getTime();
  // This subject will become the payload in our strategy
  // eslint-disable-next-line no-underscore-dangle
  return jwt.encode({ sub: user._id, iat: timeStamp }, process.env.SECRET || secret);
}

async function getBadge(github) {
  try {
    const gitData = await axios.get(`https://api.github.com/users/${github}`);
    return gitData.data.avatar_url || '';
  } catch (e) {
    return '';
  }
}

module.exports = {
  signUp: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      github,
      strength,
      weakness,
      bio,
    } = req.body;
    const badge = await getBadge(github);
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: 'You must provide email and password' });
    }
    if (!isEmail(email)) {
      console.log('email error', email);
      return res
        .status(403)
        .json({ error: 'You must provide a valid email address' });
    }
    if (!isLength(password, { min: 6 })) {
      console.log('password error', password);
      return res
        .status(403)
        .json({ error: 'Your password must be at least 6 characters long' });
    }
    try {
      // See if a user with the given email exists
      const existingUser = await User.findOne({ email });
      console.log('existingUser', existingUser);
      if (existingUser) {
        return res
          .status(403)
          .json({ error: 'User already exists' });
      }
      const user = await new User({
        firstName,
        lastName,
        email,
        password,
        github,
        strength,
        weakness,
        bio,
        badge,
      }).save();
      const currentUser = await User.findById(user._id).select('-password');
      console.log('SignedUpUser', currentUser);
      console.log('returned SignedUpUser', user);
      // Eventually we will send a token
      return res.json({ token: tokenForUser(user), user: currentUser });
    } catch (e) {
      return res
        .status(403)
        .json({ e });
    }
  },
  signIn: async (req, res) => {
    const currentUser = await User.findOne({ email: req.user.email }).select('-password');
    console.log('SignedIn User', currentUser);
    res.json({ token: tokenForUser(req.user), user: currentUser });
  },
};
