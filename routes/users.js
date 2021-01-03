var express = require('express');
var router = express.Router();
var dbControl = require('../DbControl')
var Db = new dbControl()


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

router.post('/novaMeta', function(req,res,next){
 
  
 
})


module.exports = router;
