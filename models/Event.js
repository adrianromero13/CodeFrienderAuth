const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

  },
  time: {
    type: String,

  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  attending: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  pin: {
    type: Number,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  host: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = model('Event', EventSchema);

module.exports = Event;
