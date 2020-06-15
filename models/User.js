const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  github: {
    type: String,
  },
  strength: {
    type: String,
  },
  weakness: {
    type: String,
  },
  bio: {
    type: String,
  },
  badge: {
    type: String,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'event',
    },
  ],
  attending: [
    {
      type: Schema.Types.ObjectId,
      ref: 'event',
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return Promise.resolve(isMatch);
  } catch (e) {
    return Promise.reject(e);
  }
};

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (e) {
      next(e);
    }
  }
  next();
});

module.exports = model('User', UserSchema);
