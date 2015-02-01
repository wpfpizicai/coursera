var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var User = Model.User;

var Users = Bookshelf.Collection.extend({
  model: User
});

exports.Users = Users;