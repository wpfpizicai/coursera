var express = require('express');
var router = express.Router();
var controller = require('../controller');
var sequence = require('when/sequence');
var Users = controller.Users;
var Lessons = controller.Lessons;
var Tags = controller.Tags;
var UserLessons = controller.UserLessons;

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

router.post('/search_lesson_by_userid',function(req, res){
  Users.searchLessonByUserId({
    id : req.body.id
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
    title: req.body.name,
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

router.post('/add_user_lesson',function(req, res){
  UserLessons.addUserLesson({
    lesson_id: req.body.l_id,
    user_id: req.body.u_id
  },function(result){
    res.json(result)
  })
});
router.post('/search_user_lesson',function(req, res){
  var obj = {};
  if(req.body.l_id){
    obj.lesson_id = req.body.l_id
  }
  if(req.body.u_id){
    obj.user_id = req.body.u_id;
  }
  UserLessons.searchUserLesson(obj, function(result){
    res.json(result)
  })
});

module.exports = router;
