const mongoose = require('mongoose');

// define the schema for our user model
var tweetsSchema = mongoose.Schema({
    tweet             : { type: String, required: false },
    avatar            : String,
    twitter_id        : String,
    user_name         : String,
    screen_id         : String,
    created_at        : Date
});

// create the model for users and expose it to our app
module.exports = mongoose.model('tweets', tweetsSchema);
