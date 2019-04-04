var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const initConf = {x:10,y:10};
  res.render('index', {title: 'Life Game2', conf: initConf});
});

module.exports = router;