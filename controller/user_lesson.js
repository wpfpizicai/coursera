var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var UserLesson = Model.UserLesson;

UserLessons = Bookshelf.Collection.extend({
  model: UserLesson
});

var addUserLesson = function (obj, cb) {
  UserLesson.forge(obj)
    .save()
    .then(function (userlesson) {
      cb && cb ({error: false, data: userlesson.toJSON()})
    })
    .otherwise(function (err) {
      cb && cb ({error: true, data: {message: err.message}})
    });
};

var fetchAllUserLesson = function(cb){
  UserLessons.forge()
    .fetch()
    .then(function (collection) {
      cb && cb({error: false, data: collection.toJSON()})
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
};

var searchUserLesson = function(obj, cb){
  UserLesson
    .where(obj)
    .fetchAll()
    .then(function (userlessons) {
      if (!userlessons) {
        cb && cb({error: false, data: {}});
      }
      else {
        cb && cb({error: false, data: userlessons.toJSON()});
      }
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
};

var searchLessonByUserId = function(obj, cb){
  UserLesson
    .where(obj)
    .fetch({
      withRelated: ['user']
    })
    .then(function(userlessons){
      cb && cb({error: false, data: userlessons.related('user')});
    })
};

exports.searchLessonByUserId = searchLessonByUserId;
exports.addUserLesson = addUserLesson;
exports.fetchAllUserLesson = fetchAllUserLesson;
exports.searchUserLesson = searchUserLesson;


