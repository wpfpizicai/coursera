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

router.post('/user',function(req,res){
  User.forge({
      name: req.body.name,
      email: req.body.email
    })
    .save()
    .then(function (user) {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
})

module.exports = router;
