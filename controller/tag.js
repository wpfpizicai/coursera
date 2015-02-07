var Model = require('../model');
var Bookshelf = Model.Bookshelf;
var Tag = Model.Tag;

var Tags = Bookshelf.Collection.extend({
  model: Tag
});

var fetchAllTags = function(cb){
  Tags.forge()
    .fetch()
    .then(function (collection) {
      cb && cb({error: false, data: collection.toJSON()})
    })
    .otherwise(function (err) {
      cb && cb({error: true, data: {message: err.message}})
    });
}
var addTag = function (obj,cb) {
  Tag.forge(obj)
    .save()
    .then(function (tag) {
      cb && cb ({error: false, data: {id: tag.get('id')}})
    })
    .otherwise(function (err) {
      cb && cb ({error: true, data: {message: err.message}})
    });
};

exports.fetchAllTags = fetchAllTags;
exports.addTag = addTag;