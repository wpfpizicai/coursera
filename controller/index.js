var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var User = Model.User;

var Users = Bookshelf.Collection.extend({
  model: User
});

var fetchAllUsers = function(cb){
  Users.forge()
    .fetch()
    .then(function (collection) {
      cb && cb({error: false, data: collection.toJSON()})
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
}
var addUser = function (obj,cb) {
  User.forge(obj)
    .save()
    .then(function (user) {
      cb && cb ({error: false, data: {id: user.get('id')}})
    })
    .otherwise(function (err) {
      cb && cb ({error: true, data: {message: err.message}})
    });
};

exports.fetchAllUsers = fetchAllUsers;
exports.addUser = addUser;