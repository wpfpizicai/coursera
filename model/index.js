var conf = require('../db/conf');
var knex = require('knex')(conf);
var Bookshelf = require('bookshelf')(knex);

// define user model
var User = Bookshelf.Model.extend({
  tableName: 'user'
});

var Tag = Bookshelf.Model.extend({
  tableName: 'tag'
});

var Lesson = Bookshelf.Model.extend({
  tableName: 'lesson'
});

var UserLesson = Bookshelf.Model.extend({
  tableName: 'user_lesson',
  lesson: function(){
    return this.belongsTo(Lesson)
  },
  user: function(){
    return this.belongsTo(User)
  }
});

var LessonTag = Bookshelf.Model.extend({
  tableName: 'lesson_tag'
})

exports.User = User;
exports.Tag = Tag;
exports.Lesson = Lesson;
exports.UserLesson = UserLesson;
exports.LessonTag = LessonTag
exports.Bookshelf = Bookshelf;