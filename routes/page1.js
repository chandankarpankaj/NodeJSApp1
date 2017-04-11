var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('page1',{
    header: 'This is the header for page1'
  });
});

module.exports = router;
