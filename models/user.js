// test.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,	
  username: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;