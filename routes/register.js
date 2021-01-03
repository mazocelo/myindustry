var express = require('express');
var router = express.Router();
var dbControl = require('../model/DbControl')

var Db = new dbControl()
router.post('/', function(req, res, next) {
     Db.insertUser(req.body).then(statusReg=>{
          
          res.redirect('/login')
     }).catch(err=>{
          console.log(err)
     })
});

module.exports = router;