var conf = require('../db/conf');
var knex = require('knex')(conf);
var Bookshelf = require('bookshelf')(knex);

// define user model
var User = Bookshelf.Model.extend({
  tableName: 'user',
  lessons : function () {
    return this.belongsToMany(Lesson)
  }
});

var Tag = Bookshelf.Model.extend({
  tableName: 'tag'
});

var Lesson = Bookshelf.Model.extend({
  tableName: 'lesson',
  users : function(){
    return this.belongsToMany(User);
  }
});

var UserLesson = Bookshelf.Model.extend({
  tableName: 'user_lesson'
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