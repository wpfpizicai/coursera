var express = require('express');
var controller = require('../controller');
var Users = controller.Users;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/user',function(req,res){
  Users.forge()
    .fetch()
    .then(function (collection) {
      res.render('user',{error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
});

router.post('/adduser/:id',function(req,res){
  User.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (user) {
      user.save({
        name: req.body.name || user.get('name'),
        email: req.body.email || user.get('email')
      })
      .then(function () {
        res.json({error: false, data: {message: 'User details updated'}});
      })
      .otherwise(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
})

module.exports = router;
