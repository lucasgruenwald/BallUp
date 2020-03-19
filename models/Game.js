const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GameSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    location: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    game_date: {
        type: String,
        required: true
    },
    players: {
      type: Array
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

  module.exports = Game = mongoose.model('Game', GameSchema);