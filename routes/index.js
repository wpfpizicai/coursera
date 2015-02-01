var express = require('express');
var controller = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/user',function(req,res){
  controller.fetchAllUsers(function(result){
    res.render('user',result);
  })
});

router.post('/user',function(req,res){
  controller.addUser({
      name: req.body.name,
      email: req.body.email
    },function(result){
      res.json(result)
    })
})

module.exports = router;