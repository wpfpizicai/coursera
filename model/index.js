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
  users: function (){
    return this.belongsToMany(User, 'id')
  },
  lessons: function(){
    return this.belongsToMany(Lesson, 'id')
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