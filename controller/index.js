var Model = require('../model');
var User = Model.User;

var Users = Bookshelf.Collection.extend({
  model: User
});

exports.Users = Users;