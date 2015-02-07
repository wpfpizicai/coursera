var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var Lesson = Model.Lesson;

var Lessons = Bookshelf.Collection.extend({
  model: Lesson
});

var fetchAllLessons = function(cb){
  Lessons.forge()
    .fetch()
    .then(function (collection) {
      cb && cb({error: false, data: collection.toJSON()})
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
}
var addLesson = function (obj,cb) {
  Lesson.forge(obj)
    .save()
    .then(function (leson) {
      cb && cb ({error: false, data: {id: lesson.get('id')}})
    })
    .otherwise(function (err) {
      cb && cb ({error: true, data: {message: err.message}})
    });
};

exports.addLesson = addLesson;
exports.fetchAllLessons = fetchAllLessons;