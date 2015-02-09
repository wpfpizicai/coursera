var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var User = Model.User;

var Users = Bookshelf.Collection.extend({
  model: User
});

var searchUser = function(obj,cb){
  User.forge(obj)
    .fetch()
    .then(function (user) {
      if (!user) {
        cb && cb({error: false, data: {}});
      }
      else {
        cb && cb({error: false, data: user.toJSON()});
      }
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
};

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

var delUser = function(obj,cb){
  User.forge(obj)
    .fetch({require: true})
    .then(function (user) {
      user.destroy()
      .then(function () {
        cb && cb({error: false, data: {message: 'User successfully deleted'}});
      })
      .otherwise(function (err) {
        cb && cb ({error: true, data: {message: err.message}})
      });
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
};


exports.searchUser = searchUser;
exports.fetchAllUsers = fetchAllUsers;
exports.addUser = addUser;
exports.delUser = delUser;