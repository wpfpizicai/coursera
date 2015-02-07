var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'nodejs',
    password: 'Wpf4284286',
    database: 'nodejs',
    charset: 'utf8'
  },
  pool: {
    min: 0,
    max: 7
  }
});

var Bookshelf = require('bookshelf')(knex);



// define user model
var User = Bookshelf.Model.extend({
  tableName: 'users'
});

var Category = Bookshelf.Model.extend({
  tableName : 'categories'
});

var Lesson = Bookshelf.Model.extend({
  tableName : 'lessons',
  hasTimestamps: ['created_at', 'updated_at']
});


exports.User = User;
exports.Category = Category;
exports.Lesson = Lesson;
exports.Bookshelf = Bookshelf;