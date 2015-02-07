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

var User_Lesson = Bookshelf.Model.extend({
  tableName: 'user_lesson'
});

var Lesson_tag = Bookshelf.Model.extend({
  tableName: 'lesson_tag'
})

exports.User = User;
exports.Tag = Tag;
exports.Lesson = Lesson;
exports.User_Lesson = User_Lesson;
exports.Lesson_tag = Lesson_tag
exports.Bookshelf = Bookshelf;