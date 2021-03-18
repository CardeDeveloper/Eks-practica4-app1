var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Esta es la aplicación 1' });
});

router.get('/revisasivivo', function(req, res, next) {
  res.json({"status":"estoy bien"});
});
module.exports = router;
