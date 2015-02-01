var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var Lesson = Model.Lesson;

var Lessons = Bookshelf.Collection.extend({
  model: Lesson
});