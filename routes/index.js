var express = require('express');
var controller = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/user',function(req,res){
  controller.fetchAllUsers(function(result){
    if(result.error == false){
      res.render('user',result);
    }
  })
});

router.post('/user',function(req,res){
  controller.addUser({
      name: req.body.name,
      email: req.body.email
    },function(result){
      res.json(result)
    })
});

router.post('/searchuser',function(req,res){
  controller.searchUser({
    name : req.body.name
  },function(result){
    res.json(result)
  })
});

router.post('/deluser',function(req,res){
  controller.delUser({
    id : req.body.id
  },function(result){
    res.json(result)
  })
})

module.exports = router;
