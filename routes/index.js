var express = require('express');
var router = express.Router();
var controller = require('../controller');
var sequence = require('when/sequence');
var Users = controller.Users;
var Lessons = controller.Lessons;
var Tags = controller.Tags;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/user',function(req, res){
  Users.fetchAllUsers(function(result){
    if(result.error == false){
      res.render('user',result);
    }
  })
});

router.post('/user',function(req, res){
  Users.addUser({
      name: req.body.name,
      email: req.body.email
    },function(result){
      res.json(result)
    })
});

router.post('/searchuser',function(req, res){
  Users.searchUser({
    name : req.body.name
  },function(result){
    res.json(result)
  })
});

router.post('/deluser',function(req, res){
  Users.delUser({
    id : req.body.id
  },function(result){
    res.json(result)
  })
});

router.post('/lesson',function(req, res){
  Lessons.addLesson({
    name: req.body.name,
  },function(result){
    res.json(result)
  })
});

router.get('/lesson',function(req, res){
  Lessons.fetchAllLessons(function(result){
    res.josn(result)
  })
});

router.post('/tag',function(req, res){
  Tags.addTag({
    name: req.body.name,
  },function(result){
    res.json(result)
  })
});

router.get('/tag',function(req, res){
  Tags.fetchAllTags(function(result){
    res.josn(result)
  })
});

module.exports = router;
