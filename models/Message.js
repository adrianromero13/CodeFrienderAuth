const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event'}
});

module.exports = model('Message', MessageSchema);
